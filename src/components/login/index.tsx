import React from "react";
import { useLogin } from "@refinedev/core";

export const LoginComponent: React.FC = () => {
    const { mutate: login } = useLogin();

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <button onClick={() => login({})}>Sign in</button>
            <p>Powered by Django-Rest-Auth</p>
        </div>
    );
};
