import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <button className="mt-4 rounded-md">
        <Image
          src="/vscode_icon.svg"
          alt="VS-Code Icon"
          height={100}
          width={100}
        />
      </button>
    </main>
  );
};

export default loading;
