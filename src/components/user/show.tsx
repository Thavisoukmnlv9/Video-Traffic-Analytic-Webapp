import React from "react";
import {
  useShow,
  useResource,
  useNavigation,
  IResourceComponentsProps,
} from "@refinedev/core";

export const UserShow: React.FC<IResourceComponentsProps> = () => {
  const { edit, list } = useNavigation();
  const { id, resource } = useResource();
  const { queryResult } = useShow({
    resource: "user",
    id,
  });
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <div style={{ padding: "16px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>User</h1>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => list("user")}>Users List</button>
          <button onClick={() => edit("user", id ?? "")}>Edit</button>
        </div>
      </div>
      <div>
        <div style={{ marginTop: "6px" }}>
          <h5>Id</h5>
          <div>{record?.id ?? ""}</div>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5>Username</h5>
          <div>{record?.username}</div>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5>Is Active</h5>
          <div>{record?.is_active ? "Yes" : "No"}</div>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5>Is Staff</h5>
          <div>{record?.is_staff ? "Yes" : "No"}</div>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5>Date Joined</h5>
          <div>
            {new Date(record?.date_joined).toLocaleString(undefined, {
              timeZone: "UTC",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
