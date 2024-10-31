import React from "react";
import { TranslatorProvider } from "../../utils/translatorContext";
import SocialPage from "./SocialPage";
const page = () => {
  return (
    <TranslatorProvider>
      <main className='min-h-screen w-full bg-[url("/bg/background-1.jpg")] bg-cover'>
        <div className="bg-black/50 w-full h-full">
          <SocialPage />
        </div>
      </main>
    </TranslatorProvider>
  );
};

export default page;
