import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { b as getUrlParams } from './BaseLayout_BrSKT5L_.mjs';
import { V as VerifyUpgrade } from './VerifyUpgrade_Z_ucYoBE.mjs';

function CheckSubscriptionVerification() {
  const [shouldVerifyUpgrade, setShouldVerifyUpgrade] = useState(false);
  useEffect(() => {
    const params = getUrlParams();
    if (params.s !== "1") {
      return;
    }
    setShouldVerifyUpgrade(true);
  }, []);
  if (!shouldVerifyUpgrade) {
    return null;
  }
  return /* @__PURE__ */ jsx(VerifyUpgrade, {});
}

export { CheckSubscriptionVerification as C };
