import React from "react";
import { MdClose } from "react-icons/md";

const PopUp = ({ popup, setpopup }) => {
    return (
        <div
            className={`popup1 fixed top-0 left-0 w-full h-screen z-[9999] flex justify-center items-center px-5 ${
                popup === true ? "visible opacity-100" : "invisible opacity-0"
            }`}
        >
            <div className="popup-card w-[500px] rounded-2xl bg-white p-5 relative">
                <span
                    onClick={() => setpopup(false)}
                    className="w-[30px] h-[30px] bg-greenShade-300 rounded-full flex justify-center items-center text-white absolute top-0 right-0 m-5 cursor-pointer duration-100 transition-all hover:bg-orangeShade-300"
                >
                    <MdClose />
                </span>
                <div className="logo w-40 mx-auto">
                    <img className="w-full" src="/logo.png" alt="img" />
                </div>
                <div className="w-full flex items-end justify-end gap-3 flex-col mt-5">
                    <a
                        href="https://food.grab.com/my/en/restaurant/lazeez-arabic-restaurant-and-grill-bukit-bintang-delivery/1-C3LANN43AKMTWE"
                        target="blank" aria-label="food grab"
                        className="flex justify-between items-center w-full bg-gradient-to-r from-[#e4d6c8] from-10% via-[#e7b894] via-60% to-[#64c484] to-95% overflow-hidden px-3 rounded-xl h-12 font-JosefinSans_semibold relative"
                    >
                        <span className="w-9 h-9 absolute top-1/2 -translate-y-1/2 flex items-center justify-center">
                            <img className="w-full" src="/grab.svg" alt="img" />
                        </span>
                        <span className="w-full text-center">Grab</span>
                    </a>
                    <a
                        href="https://www.foodpanda.my/restaurant/kd3b/lazeez-arabic-restaurant-and-grill"
                        target="blank" aria-label="foodpanda"
                        className="flex justify-between items-center w-full bg-gradient-to-r from-[#e4d6c8] from-10% via-[#e7b894] via-60% to-[#64c484] to-95%  overflow-hidden px-3 rounded-xl h-12 font-JosefinSans_semibold relative"
                    >
                        <span className="w-9 h-9 absolute top-1/2 -translate-y-1/2 flex items-center justify-center">
                            <img
                                className="w-full"
                                src="/foodpanda.svg"
                                alt="img"
                            />
                        </span>
                        <span className="w-full text-center">Foodpanda</span>
                    </a>
                    <a
                        href="https://lazeezarabianrestoranandgrill.beepit.com/ordering/?h=U2FsdGVkX18%2FsmULVbkv0u0pip8mvvALlCUg2%2Fr%2Bk2EIK9huAKN6E8gfHrJIfOFH&source=https%3A%2F%2Fbeepit.com%2Fsearch&type=delivery"
                        target="blank" aria-label="beep"
                        className="flex justify-between items-center w-full bg-gradient-to-r from-[#e4d6c8] from-10% via-[#e7b894] via-60% to-[#64c484] to-95%  overflow-hidden px-3 rounded-xl h-12 font-JosefinSans_semibold relative"
                    >
                        <span className="w-9 h-9 absolute top-1/2 -translate-y-1/2 flex items-center justify-center">
                            <img className="w-full" src="/beep.svg" alt="img" />
                        </span>
                        <span className="w-full text-center">Beep</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
