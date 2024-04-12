import { signOutMutation } from '@/__generated__/signOutMutation.graphql';
import { SignOut } from '@/components/auth/mutation/signOut';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import type { UseMutationConfig } from 'react-relay';
import { useMutation } from 'react-relay';

export const useLogout = () => {
  const router = useRouter();

  const [handleLogout] = useMutation<signOutMutation>(SignOut);

  const logout = useCallback(() => {
    const config: UseMutationConfig<signOutMutation> = {
      variables: {
        input: {},
      },
    };

    handleLogout(config);

    router.push('/auth/login');
  }, [router]);

  return [logout];
};
