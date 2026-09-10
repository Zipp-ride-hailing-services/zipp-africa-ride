import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/drivers")({
  beforeLoad: () => {
    throw redirect({ to: "/drive" });
  },
});
