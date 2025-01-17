
export const shareKakao = () => { 

    const realUrl = "https://carbo-footprint.vercel.app"

    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init("2e88fd569837e22e16158f3a5d708722");
        console.log(kakao.isInitialized()); 
      }
    

    kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: '탄수 발자국',
            description: '탄수 발자국과 함께 건강한 탄수화물 습관을 만드세요!',
            imageUrl:'https://ifh.cc/g/HlYDXh.png',
            link: {
              mobileWebUrl:realUrl,
                webUrl: realUrl
            },
        },
        buttons: [
            {
                title: '혹시 나도 탄수화물 중독?!',
                link: {
                  mobileWebUrl:realUrl,
                  webUrl: realUrl
                },
            },
            ],
        });

  };
}
