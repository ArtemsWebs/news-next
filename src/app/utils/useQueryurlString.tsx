import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function useQueryUrlString(name: string) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  return useCallback(
    (value?: string) => {
      if (!value) return;

      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      console.log(params);
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, name, pathname],
  );
}
