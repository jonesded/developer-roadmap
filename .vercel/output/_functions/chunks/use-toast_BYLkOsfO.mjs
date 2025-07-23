import { $ as $toastMessage } from './toast_BJ-iAXal.mjs';

function useToast() {
  function success(message) {
    $toastMessage.set({ type: "success", message });
  }
  function error(message) {
    $toastMessage.set({ type: "error", message });
  }
  function info(message) {
    $toastMessage.set({ type: "info", message });
  }
  function warning(message) {
    $toastMessage.set({ type: "warning", message });
  }
  function loading(message) {
    $toastMessage.set({ type: "loading", message });
  }
  return { success, error, info, warning, loading, $toastMessage };
}

export { useToast as u };
