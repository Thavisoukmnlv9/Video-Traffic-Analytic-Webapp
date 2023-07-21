import { UserCreate } from "@components/user";
import { RefineWithoutLayout } from "../../../../.storybook/RefineWithoutLayout";
import { FC } from "react";

export const List: typeof UserCreate = (args) => <UserCreate />;

export default {
  title: "User/create",
  component: UserCreate,
  parameters: {
    nextjs: {
      router: {
        basePath: "/user",
      },
    },
  },

  argTypes: {
    title: {
      type: "string",
    },
  },

  decorators: [(Story: FC) => RefineWithoutLayout(Story)],
};
