var resultUrl = AF_SMART_SCRIPT_RESULT.clickURL;
if (resultUrl) {
  document.getElementById("andrd_link")?.setAttribute("href", resultUrl);
  document.getElementById("ios_link")?.setAttribute("href", resultUrl);
  document.getElementById("bt_andrd_link")?.setAttribute("href", resultUrl);
  document.getElementById("bt_ios_link")?.setAttribute("href", resultUrl);
  document.getElementById("fix_andrd_link")?.setAttribute("href", resultUrl);
  document.getElementById("fix_ios_link")?.setAttribute("href", resultUrl);
}
window.AF_SMART_SCRIPT.displayQrCode("my_qr_code_div_id");