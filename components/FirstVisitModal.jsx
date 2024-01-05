import { useState } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Image from "next/image";

import logo from "../public/icons/logo.svg";
import rule1 from "../public/icons/rule1.png";
import ranking from "../public/icons/ranking.png";
import close from "../public/icons/close.svg";

Splide.defaults = {
  type: "loop",
  perPage: 2,
};

const FirstVisitModal = ({ onClose, onChange, isChecked }) => {
  return (
    <div className="fixed w-full h-screen z-10 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-4/5 h-2/3 text-sm bg-white rounded-lg flex flex-col justify-center items-center">
        <button
          className="z-50 absolute flex items-center justify-center top-32 right-20 border-black border-2 p-1"
          onClick={() => onClose()}
        >
          <Image width={25} height={25} src={close} alt="Close Button" />
        </button>
        <Splide aria-label="尻鉄の紹介">
          <SplideSlide>
            <div className="flex flex-col items-center w-full h-full text-center">
              <h2>はじめに</h2>
              <p></p>
              <Image width={150} height={150} src={logo} alt="ロゴ" />
              <p></p>
              <p></p>
              <p className="mt-8">「尻鉄」は鉄道駅のしりとりゲームです</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex flex-col items-center w-full h-full text-center">
              <h2>ルール 1</h2>
              <Image
                width={529 / 3}
                height={607 / 3}
                src={rule1}
                alt="前の駅の最後の文字で始まる駅を入力"
              />
              <p className="mt-8">前の駅の最後の文字で始まる駅を入力します</p>
              <p></p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex flex-col items-center w-full h-full px-10 text-center">
              <h2>ルール 2</h2>

              <p className="mb-0">
                <span className="text-red-500 mr-2 font-bold">〇</span>
                <span className="inline-block w-24 text-right">
                  あわじ
                </span> → <span className="inline-block w-24">しんしろ</span>
              </p>
              <p className="mb-0">
                <span className="text-red-500 mr-2 font-bold">〇</span>
                <span className="inline-block w-24 text-right">
                  たませんたー
                </span>{" "}
                → <span className="inline-block w-24">たまち</span>
              </p>
              <p className="mb-0">
                <span className="text-red-500 mr-2 font-bold">〇</span>
                <span className="inline-block w-24 text-right">
                  しんばし
                </span> → <span className="inline-block w-24">JRなんば</span>
              </p>
              <p className="mb-0">
                <span className="text-purple-500 mr-2 font-bold">×</span>
                <span className="inline-block w-24 text-right">
                  なかみなと
                </span>{" "}
                → <span className="inline-block w-24">とが・みきた</span>
              </p>
              <p className="mb-8">
                <span className="text-red-500 mr-2 font-bold">〇</span>
                <span className="inline-block w-24 text-right">
                  なかみなと
                </span>{" "}
                → <span className="inline-block w-24">とがみきた</span>
              </p>
              <p className="leading-snug">
                ひらがな・アルファベット・数字を入力できます。
                中黒・カッコは無視して入力してください。
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex flex-col items-center w-full h-full px-10 text-center">
              <h2>ランキング</h2>
              <Image
                width={551 / 2}
                height={310 / 2}
                src={ranking}
                alt="ランキング"
              />
              <p className="leading-snug mt-6">
                個人ランキングが記録されます。また、ログインすると総合ランキングに参加できます。
              </p>
              {/* 今後表示するかチェックボックスをクリックすると、次回から表示されなくなります。 */}
              <div className="mt-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onChange()}
                />
                <label className="ml-2">今後表示しない</label>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default FirstVisitModal;