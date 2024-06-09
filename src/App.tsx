import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css'; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）
import "./App.css"

export default function App() {
  return (

    <>
      <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          type: "slide",
          autoplay: true, // 自動再生を有効
          interval: 3000, // 自動再生の間隔を3秒に設定
          rewindByDrag: true,
          start: 0,
          perPage:1,
          perMove: 1,
          drag: true,
          arrows: true, // 矢印ボタンを無効
          keyboard: "global"
          //pagination: false, // ページネーションを無効
        }}
        
      >
        <SplideSlide>
          <img className="slide-img" src="https://www.pakutaso.com/shared/img/thumb/shikun20220402_114719-2_TP_V.jpg" alt="かわいい猫の画像 part1" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="https://www.pakutaso.com/shared/img/thumb/shikun20220402_122123_TP_V.jpg" alt="かわいい猫の画像 part2" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="https://www.pakutaso.com/shared/img/thumb/sikun_20220402-180657-2_TP_V.jpg" alt="かわいい猫の画像 part3" />
        </SplideSlide>
      </Splide>
    </>
  );
};