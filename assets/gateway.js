// Simple front-end gateway (lightweight deterrent, not true security).
// Change ACCESS_CODE before sharing.
const ACCESS_CODE = "PickleOps2026";
const TARGET_PAGE = "investor.html";

const codeInput = document.getElementById("code");
const enterBtn = document.getElementById("enterBtn");
const hintBtn = document.getElementById("hintBtn");
const msg = document.getElementById("msg");

function enter() {
  const val = (codeInput.value || "").trim();
  if (!val) {
    msg.textContent = "Enter your access code.";
    return;
  }
  if (val === ACCESS_CODE) {
    sessionStorage.setItem("po_gate_ok", "1");
    window.location.href = TARGET_PAGE;
  } else {
    msg.textContent = "Invalid code.";
  }
}

enterBtn.addEventListener("click", enter);
codeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") enter();
});

hintBtn.addEventListener("click", () => {
  window.location.href = "mailto:?subject=PickleOps%20Investor%20Access%20Request&body=Hi%20-%20Please%20share%20investor%20access%20for%20pickleopsapp.com";
});
