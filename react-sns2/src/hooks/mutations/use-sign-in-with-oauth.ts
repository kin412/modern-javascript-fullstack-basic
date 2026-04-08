import { signInWithOAuth } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export function useSignInWIthOAuth() {
  return useMutation({
    mutationFn: signInWithOAuth,
  });
}
