import { useQuery, queryOptions } from '@tanstack/react-query';
import { h as httpGet, q as queryClient } from './query-client_rwy39LWF.mjs';
import { i as isLoggedIn } from './BaseLayout_BrSKT5L_.mjs';

const USER_SUBSCRIPTION_PLAN_PRICES = [
  {
    name: "Pay Monthly",
    interval: "month",
    priceId: undefined                                                         ,
    amount: undefined                                                             
  },
  {
    name: "Pay Yearly",
    interval: "year",
    priceId: undefined                                                        ,
    amount: undefined                                                            
  }
];
function billingDetailsOptions() {
  return queryOptions({
    queryKey: ["billing-details"],
    queryFn: async () => {
      return httpGet("/v1-billing-details");
    },
    enabled: !!isLoggedIn()
  });
}
function useIsPaidUser() {
  const { data, isLoading } = useQuery(
    {
      queryKey: ["billing-details"],
      queryFn: async () => {
        return httpGet("/v1-billing-details");
      },
      enabled: !!isLoggedIn(),
      select: (data2) => data2.status === "active"
    },
    queryClient
  );
  return {
    isPaidUser: data ?? false,
    isLoading
  };
}
function coursePriceOptions(params) {
  return queryOptions({
    queryKey: ["course-price", params],
    queryFn: async () => {
      return httpGet(
        `/v1-course-price/${params.courseSlug}`
      );
    }
  });
}

export { USER_SUBSCRIPTION_PLAN_PRICES as U, billingDetailsOptions as b, coursePriceOptions as c, useIsPaidUser as u };
