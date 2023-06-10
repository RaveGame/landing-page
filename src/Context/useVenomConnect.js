import { Address, ProviderRpcClient } from "everscale-inpage-provider";
// import { EverscaleStandaloneClient } from "everscale-standalone-client";
import { VenomConnect } from "venom-connect";

import React, { createContext, useCallback, useEffect, useState } from "react";

export const targetNetworkId = 1000;

export const TokenDiceContractAddress = new Address(
  "0:19128985f2d034a0a7b8dad5b23946aff3e63fe68c13243feb58124cef9acbb6"
);
export const TokenRootContractAddress = new Address(
  "0:13d2105fbd7fb7665eb7845703e507b192557a4048c8d27fa8ee08828db76cb0"
);

const InitialState = {
  isInitializing: true,
  isConnected: false,
  account: undefined,
  provider: undefined,
  login: () => null,
  logout: () => null,
};

const initVenomConnect = async () => {
  return new VenomConnect({
    theme: "dark",
    checkNetworkId: 1000,
    providersOptions: {
      venomwallet: {
        walletWaysToConnect: [
          {
            package: ProviderRpcClient,

            packageOptions: {
              fallback:
                VenomConnect.getPromise("venomwallet", "extension") ||
                // eslint-disable-next-line prefer-promise-reject-errors
                (() => Promise.reject()),
              forceUseFallback: true,
            },
            packageOptionsStandalone: {
              fallback: () =>
                EverscaleStandaloneClient.create({
                  connection: {
                    id: 1000,
                    group: "venom_testnet",
                    type: "jrpc",
                    data: {
                      endpoint: "https://jrpc-testnet.venom.foundation/rpc",
                    },
                  },
                }),
              forceUseFallback: true,
            },

            id: "extension",
            type: "extension",
          },
        ],
        defaultWalletWaysToConnect: ["mobile", "ios", "android"],
      },
    },
  });
};
export const VenomProviderContext = createContext(InitialState);
export function VenomProvider({ children }) {
  const [venomConnect, setVenomConnect] = useState(undefined);
  const [provider, setProvider] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  // const [selectedNetworkId, setSelectedNetworkId] = useState(1000);
  const [isInitializing, setIsInitializing] = useState(true);

  // Initializing
  useEffect(() => {
    const initPipeline = async () => {
      const venomConnect = await initVenomConnect();
      setVenomConnect(venomConnect);

      const provider = await venomConnect.checkAuth();
      console.log(provider, "provider");
      setProvider(provider);
      setIsInitializing(false);
    };

    initPipeline().catch((err) => {
      console.log(`Venom provider init error`, err);
    });
  }, []);

  useEffect(
    function () {
      venomConnect &&
        venomConnect.on("connect", function (provider) {
          setProvider(provider);
        });
    },
    [venomConnect]
  );

  useEffect(function () {
    // to gracefully unsubscribe
    const promises = [];
    const subscribers = [];
    let stale = false;

    if (provider) {
        // subscribe to permissions changed
        const permissionsSubscriberPromise = provider.subscribe('permissionsChanged');
        promises.push(permissionsSubscriberPromise);
        permissionsSubscriberPromise.then(function (permissionsSubscriber) {
            subscribers.push(permissionsSubscriber);
            permissionsSubscriber.on('data', (event) => {
                if (!stale)
                    setAccount(event.permissions.accountInteraction?.address.toString());
            });
        })

        // subscribe to networkId changed
        // const networkSubscriberPromise = provider.subscribe('networkChanged');
        // promises.push(networkSubscriberPromise);
        // networkSubscriberPromise.then(function(networkSubscriber) {
        //     subscribers.push(networkSubscriber);
        //     networkSubscriber.on('data', (event) => {
        //         if (!stale)
        //             setSelectedNetworkId(event.networkId);
        //     });
        // })

        // after successfully subscribe to changes
        Promise.all(promises).then(function () {
            provider.getProviderState().then(function (currentProviderState) {
                if (!stale) {
                    // setSelectedNetworkId(currentProviderState.networkId);
                    setAccount(currentProviderState.permissions.accountInteraction?.address.toString());
                }
            });
        });

        return () => {
            stale = true;
            Promise.all(promises).then(function () {
                subscribers.forEach(function (subscribe) {
                    subscribe.unsubscribe();
                });
            })
        }
    }
}, [provider]);

  const login = useCallback(async () => {
    try {
      await venomConnect.connect();
    } catch (e) {
      console.log("Connecting error", e);
    }
  }, [venomConnect, provider]);

  const logout = useCallback(async () => {
    await venomConnect.disconnect();
    setAccount(undefined);
  }, [venomConnect]);

  return (
    <VenomProviderContext.Provider
      value={{
        isInitializing,
        isConnected: !isInitializing && !!account,
        account,
        provider,
        login,
        logout,
      }}
    >
      {children}
    </VenomProviderContext.Provider>
  );
}
