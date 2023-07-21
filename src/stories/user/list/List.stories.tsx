import { UserList } from "@components/user";
import { RefineWithoutLayout } from "../../../../.storybook/RefineWithoutLayout";
import { FC } from "react";

export const List: typeof UserList = (args) => <UserList />;

export default {
  title: "User/list",
  component: UserList,
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
