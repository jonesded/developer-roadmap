import Cookies from 'js-cookie';
import fp from '@fingerprintjs/fingerprintjs';
import { T as TOKEN_COOKIE_NAME, r as removeAuthToken } from './BaseLayout_BrSKT5L_.mjs';
import { QueryClient, QueryCache } from '@tanstack/react-query';

class FetchError extends Error {
  status;
  message;
  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;
  }
  static isFetchError(error) {
    return error instanceof FetchError;
  }
}
async function httpCall(url, options) {
  const fullUrl = url.startsWith("http") ? url : `${undefined                              }${url}`;
  try {
    const fingerprintPromise = await fp.load();
    const fingerprint = await fingerprintPromise.get();
    const isMultiPartFormData = options?.body instanceof FormData;
    const headers = new Headers({
      Accept: "application/json",
      Authorization: `Bearer ${Cookies.get(TOKEN_COOKIE_NAME)}`,
      fp: fingerprint.visitorId,
      ...options?.headers ?? {}
    });
    if (!isMultiPartFormData) {
      headers.set("Content-Type", "application/json");
    }
    const response = await fetch(fullUrl, {
      credentials: "include",
      ...options,
      headers
    });
    const doesAcceptHtml = options?.headers?.["Accept"] === "text/html";
    const data = doesAcceptHtml ? await response.text() : await response.json();
    if (data?.status === 401) {
      removeAuthToken();
      window.location.href = "/login";
      return null;
    }
    if (!response.ok) {
      if (data.errors) {
        throw new FetchError(response?.status, data.message);
      } else if (data.message) {
        throw new FetchError(response?.status, data.message);
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
    return data;
  } catch (error) {
    throw error;
  }
}
async function httpPost(url, body, options) {
  return httpCall(url, {
    ...options,
    method: "POST",
    body: body instanceof FormData ? body : JSON.stringify(body)
  });
}
async function httpGet(url, queryParams, options) {
  const searchParams = new URLSearchParams(queryParams).toString();
  const queryUrl = searchParams ? `${url}?${searchParams}` : url;
  return httpCall(queryUrl, {
    credentials: "include",
    method: "GET",
    ...options
  });
}
async function httpPatch(url, body, options) {
  return httpCall(url, {
    ...options,
    method: "PATCH",
    body: JSON.stringify(body)
  });
}
async function httpDelete(url, options) {
  return httpCall(url, {
    ...options,
    method: "DELETE"
  });
}

const queryClient = new QueryClient({
  queryCache: new QueryCache({}),
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      enabled: false
    }
  }
});

export { httpPost as a, httpDelete as b, httpPatch as c, httpGet as h, queryClient as q };
