

//아티클 생성
function makeArticle(data, index)
{
  const aFigure = document.createElement("div");
  aFigure.classList.add('figure');
  
  const aImg = document.createElement("div");
  aImg.classList.add('article-img')
  aImg.style.backgroundImage = data.img;

  const aFigcap = document.createElement("div");
  aFigcap.classList.add('accordion');
  aFigcap.setAttribute("data-index", index);
  aFigcap.classList.add('figcaption');

  // 데이터 셋
  const aButton = document.createElement("button");
  aButton.setAttribute("data-index", index);
  
  const aH3 = document.createElement("h3");
  const result = data.title.replace(/(\r\n|\r|\n)/g, '<br>');
  aH3.innerHTML = result;
  
  const aH5 = document.createElement("h5");
  aH5.innerHTML = data.pica;


  const award = document.createElement("div");

  if(data.award != null)
  {
    award.classList.add('award');
    award.setAttribute('award-tooltip-text', data.award);
    aFigcap.appendChild(award);
  }

  document.getElementById("canvas").appendChild(aFigure);
  
  aFigure.appendChild(aFigcap);
  aFigcap.appendChild(aImg);
  aFigcap.appendChild(aButton);
  aButton.appendChild(aH3);
  aFigcap.appendChild(aH5);

  
}

//데이터 받아오기
function InitData(keyword)
{
  if(keyword == null || keyword == "all")
  {
    for(i in data)
    {
      makeArticle(data[i], i);
    }
  } else {

    //키워드 검색
    for(i in data)
    {
      //1st
      if(data[i].keyword != null){
        if(data[i].keyword == keyword){
          makeArticle(data[i], i);    
        } else if(data[i].keyword2 != null)
        {
          console.log("hello");
          if(data[i].keyword2 == keyword)
          {
            makeArticle(data[i], i);    
          }else if(data[i].keyword3 != null)
          {
            if(data[i].keyword3 == keyword)
            {
              makeArticle(data[i], i);    
            }
          }
        } 
      
      
      } 
    }



    //키워드 검색 끝
  }
}



const data = [
  {
    img : 'url("https://img.sbs.co.kr/newimg/news/20201229/201505967.jpg")',
    title : '이거시 도시재생 \n 제목을 추가해야합니다',
    pica : '#도시재생 #예산',
    award : '이 달의 기자상',
    keyword : '도시재생',
    keyword2 : '예산',
    p : '5년간 50조를 들여서 소멸하는 지방을 살리겠다는 도시재생 뉴딜사업. 하지만 실상을 파헤쳐보니 실집행률은 떨어지고 사업 선정 기준은 오락가락. 마부작침이 파헤쳐 본 도시재생 뉴딜사업의 맹점과 한계는 무엇일까?',
    linktitle1 : '3년째 지지부진…\'도시재생 뉴딜\' 무엇이 문제인가?',
    linktitle2 : '도시 쇠퇴 막는 구원투수 \'도시재생 뉴딜\'…공 던지다 만 이유는?',
    linktitle3 : '누구는 선정, 누구는 탈락…원인은?',
    linktitle4 : '\'주민이 주인공\' 되는 도시재생을 꿈꾼다',
    link1 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006129114',
    link2 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006134835',
    link3 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006133507',
    link4 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006139092',
  },
  {
    img : 'url("https://img.sbs.co.kr/newimg/news/20201229/201505960.jpg")',
    title : '유기동물에 대한 \n 슬픈 보고서',
    pica : '유기동물',
    keyword : '유기동물',
    p : '대한민국 반려동물 인구 1,500만 시대. 동시에 하루에 버려지는 유기동물은 370마리. 지난 2017년 \'유기동물을 부탁해\' 시리즈에 이어 더 늦기전에 우리가 해야 할 일이 무엇일지 모색해봤다. ',
    linktitle1 : '겁먹은 눈, 잘린 다리…당신이 버린 아이들입니다',
    linktitle2 : ' ① 우리가 버린 95만 \'아이\'들',
    linktitle3 : ' ② 절반은 죽는다…보호센터에선 무슨 일이?',
    linktitle4 : ' ③ \'뉴스\'가 된 개 물림 사고…매년 2천 명 다친다',
    linktitle5 : ' ④ 유기·애완을 넘어 \'반려\'동물하려면',
    linktitle6 : '[마침] 2020 유기동물을 부탁해!',
    linktitle7 : '유기동물에 관한 슬픈 보고서',
    link1 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006043030',
    link2 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006043845',
    link3 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006044695',
    link4 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006048285',
    link5 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006044994',
    link6 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006050736',
    link7 : 'https://mabu.newscloud.sbs.co.kr/abandoned_pets/'
  },

  {
    img : 'url("http://img.sbs.co.kr/newimg/news/20200915/201471348_700.jpg")',
    title : '아무나 모르는 \n 의원님의 골목식당',
    pica : '#기초의회 #재산',
    award : '이 달의 기자상',
    keyword : '기초의회',
    keyword2 : '재산',
    p : '농지를 주차장으로 쓰는가 하면, 자기 땅을 수차례 공개 언급하기까지. 부동산에 대한 애정이 많았던 지방의원들의 얘기다. 마부작침이 사회적 감시에서 살짝 비켜나 있는 그들의 재산을 탈탈 털어봤다.',
    linktitle1 : '유독 챙기던 그 땅은 \'의원님 땅\'…재산 추적해봤습니다',
    linktitle2 : '김매는 의원님들?…농사만 해야 하는 땅에 \'주차장\'',
    linktitle3 : ' ① 동네의원 절반이 농지 보유…농사는 안 짓네!',
    linktitle4 : ' ② 땅을 사랑한 의원님…이해충돌은 어떻게?',
    linktitle5 : '[마부작침 외전] 최초 공개! 공직자 재산 심사 결과.. \'기타\'의 정체는?',
    linktitle6 : '[마침] 털어봤다! 동네의원 - 재산 편',
    link1 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006009830',
    link2 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006009831',
    link3 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006010591',
    link4 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006010588',
    link5 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006013452',
    link6 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006017512'
  },
  {
    img : 'url("http://img.sbs.co.kr/newimg/news/20200904/201468114_700.jpg")',
    title : '또 다른 조두순들 \n 어떤 처벌 받았나',
    pica : '민식이법',
    keyword : '성범죄',
    keyword2 : '판결문',
    keyword3 : '어린이',
    p : '조두순의 출소가 다가오며 사회적 긴장은 이를 데 없이 높아졌다. 그의 범죄로부터 십수년이 지난 지금도 왜 우리는 이렇게 불안에 떨고 있을까. 마부작침이 조두순 출소 100일을 앞두고 그 이유를 짚어봤다.',
    linktitle1 : '100일 뒤 조두순 출소…전자발찌 · 알림e앱 실태는?',
    linktitle2 : '법원은 \'또 다른 조두순들\'에 어떤 판결을 내렸나',
    linktitle3 : ' ① 1년에 3천 명…우리 주위의 또 다른 \'조두순\'들',
    linktitle4 : ' ② 또 다른 \'조두순들\' 어떤 처벌 받았나',
    linktitle5 : ' ③ 조두순도 차게 될 전자발찌, 재범 막을 수 있을까',
    linktitle6 : ' ④ 내 주변에도 있나…알기 힘든 \'성범죄자 알림\'',
    linktitle7 : '[마침] 2020 또다른 \'조두순들\'은 지금',
    link1 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005964134',
    link2 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005965971',
    link3 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005958228',
    link4 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005959827',
    link5 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005963188',
    link6 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005967284',
    link7 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005969193'
  },
  {
    img : 'url("http://img.sbs.co.kr/newimg/news/20200804/201457496_700.jpg")',
    title : '의원님 식당에서 \n 몰아 쓴 1300만원',
    pica : '기초의회 업무추진비',
    keyword : '기초의회',
    keyword2 : '업무추진비',
    p : '지난 2년 간 전국 226개 기초의회에서 쓴 업무추진비를 탈탈 털어봤다. 정보공개청구부터 보도까지 2개월에 걸친 끈질긴 추적은 결국 잘못 쓴 업무추진비 반환까지 이끌어냈다. 데이터저널리즘 기법을 활용한 탐사보도는 과연 뭐가 달랐을까?',
    linktitle1 : '\'의원님 식당\'에서 몰아서 쓴 업무추진비…상부상조?',
    linktitle2 : '자기 집 근처에서 \'펑펑\'…의원 업무추진비는 쌈짓돈?',
    linktitle3 : ' \'의원님 식당\'에서 몰아 쓴 1,300만 원',
    linktitle4 : '커피를 사랑한 의장님…그들은 용돈처럼',
    linktitle5 : '그들은 왜 감시의 바깥에 있나',
    linktitle6 : '[마부작침 외전] 동네의회 털다가 내 영혼도 털린 사연',
    linktitle7 : '[마침] 털어봤다! 동네의회 -업무추진비 편',
    linktitle8 : ' 아무나 모르는 의원님의 \'골목식당\'',
    link1 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005906564',
    link2 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005908529',
    link3 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005912003',
    link4 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005912004',
    link5 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005914605',
    link6 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005914784',
    link7 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005918110',
    link8 : 'https://mabu.newscloud.sbs.co.kr/upchubi/'
  },
  {
    img : 'url("http://img.sbs.co.kr/newimg/news/20200713/201449807_700.jpg")',
    title : '노인 보호 못 하는 \n 노인보호구역',
    pica : '교통 안전',
    keyword : '교통안전',
    keyword2 : '어린이',
    p : '마부작침이 어린이 교통안전을 보도하면서 발견한 또 다른 교통약자, 노인. 우리나라 노인 교통사고 사망자 수는 OECD 회원국 중 압도적인 1위다. 교통안전의 사각지대인 노인보호구역을 꼼꼼하게 분석해봤다.',
    linktitle1 : '"신호 짧아"…노인 교통사고 사망 \'어린이 54배\'',
    linktitle2 : '구청마저 "여러 제한 불편"…노인보호구역 사각지대',
    linktitle3 : ' ① 2019년 노인 1,523명의 죽음',
    linktitle4 : ' ② 노인 보호 못 하는 노인보호구역',
    link1 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005872616',
    link2 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005874543',
    link3 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005877351',
    link4 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005877565'
  },
  {
    img : 'url("http://img.sbs.co.kr/newimg/news/20200612/201440151_700.jpg")',
    title : '민식이법이 \n 놓친 것들',
    pica : '#교통안전 #어린이',
    keyword : '교통안전',
    keyword2 : '어린이',
    p : '현행 스쿨존 지정 기준은 시설물 위주라는 한계가 존재했다. 어린이 교통사고 현황, 어린이 유동인구, 스쿨존 지정 현황을 겹쳐서 실제 스쿨존 사각지대를 꼼꼼하게 분석해 민식이 법이 놓친 것을 짚어봤다.',
    linktitle1 : '키워드로 본 \'스쿨존 교통사고\'…사각지대도 확인',
    linktitle2 : '단속만으로 부족한 \'스쿨존 불법주정차\'…해결책은?',
    linktitle3 : ' ① 2019년 다시 증가한 사고…여전히 불안한 스쿨존',
    linktitle4 : ' ② 스쿨존 불법 주정차 30만 건…꾸준한 위반이 문제',
    linktitle5 : ' ③ 스쿨존도 극과 극…\'스쿨존 사각지대\'를 찾아보자',
    linktitle6 : ' ④ \'어린이 안전\'보다 앞서는 가치는?',
    linktitle7 : '[마침] \'민식이법\'이 놓친 것들',
    link1 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005820890',
    link2 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005822584',
    link3 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005827147',
    link4 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005829445',
    link5 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005827961',
    link6 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005829810',
    link7 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005837116'
  },

  {
    img : 'url("https://img.sbs.co.kr/newimg/news/20201229/201505965.jpg")',
    title : '21대 국회도 586 남성이 주류 \n 당선인 300명 분석',
    pica : '#국회 #회의록',
    keyword : '국회',
    keyword2 : '회의록',
    p : '툭하면 불출석에 장외투장까지.. 민의를 대표하는 기관인 국회가 \'열일\'하는 그날을 꿈꾸며 준비했다. 공허한 지난날의 약속부터 해외사례와 반복되는 역사까지 꼼꼼하게 짚어봤다.',
    linktitle1 : '[취재파일] 일하는 국회 "또" 연속보도, 오늘부터 시작합니다.',
    linktitle2 : '[일하는국회] 20대 국회, 한 달에 나흘만 회의했다',
    linktitle3 : '[일하는국회] \'불출석 많으면 세비 삭감\' 20대 국회 적용해보니',
    linktitle4 : '[일하는국회] 231년 역사 프랑스 의회도 일 안 하면 \'얄짤없다\'',
    linktitle5 : '[일하는국회] 60년 전에도 \'나태국회\', 되풀이되는 역사?',
    link1 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005816924',
    link2 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005817531',
    link3 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005822295',
    link4 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005818288',
    link5 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005818288'
  },
  {
    img : 'url("https://img.sbs.co.kr/newimg/news/20201229/201505962.jpg")',
    title : '불법 촐영',
    pica : '#판결문 #성범죄',
    keyword : '성범죄',
    keyword2 : '판결문',
    p : '전보다 나아졌을까, 아니면 나빠졌을까. 마부작침이 2019년 불법촬영 범죄 판결문을 분석했다. 벌금형이 줄어든만큼 징역형이 늘어나는 등 소기의 진전이 있었는데, 여전이 열에 아홉은 집으로 돌아갔다.',
    linktitle1 : '불법 촬영 처벌 제자리…"기소유예 받아줬다" 홍보도',
    linktitle2 : '불법촬영범 10명 중 9명은 집으로…국민은 성큼, 판결은 제자리',
    linktitle3 : '불법촬영범 4분의 1이 재판도 안 받는 이유',
    link1 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005785533',
    link2 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005718435',
    link3 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005718435'
  },
  {
    img : 'url("http://img.sbs.co.kr/newimg/news/20200326/201415371_700.jpg")',
    title : '또 다른 조주빈들 \n 무슨 선고 받았나',
    pica : '#판결문 #성범죄',
    keyword : '성범죄',
    keyword2 : '판결문',
    p : '"이른바 \'n번방\' 사건이 세간에 알려지며 가담자 대한 사회적 공분이 들끓었다. 이들은 과연 이 분노에 걸맞은 처벌을 받게 될까? 아동 청소년 성착취물을  제작∙소지한 이들이 어떤 처벌을 받았는지 확인해봤다."',
    linktitle1 : '아동 성학대 영상 소지 1심 판결문 보니…92%가 벌금형',
    linktitle2 : ' 또 다른 조주빈들 무슨 선고 받았나',
    link1 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005716509',
    link2 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005718435'
  },
  {
    img : 'url("https://img.sbs.co.kr/newimg/news/20201229/201505964.jpg")',
    title : '2020 총선 \n 예비후보자 전수 분석',
    pica : '#국회',
    keyword : '국회',
    p : '21대 국회의 예비후보 단계부터 유권자들의 소중한 한 표를 위해 살펴본 2020총선 프로젝트. 올해 마부작침은 데이터를 활용해 우리 동네 후보자들의 정보와 나에게 어울리는 후보자를 연결해주는 컨텐츠까지 풍성하게 제작했다.',
    linktitle1 : '억울? 뻔뻔? 성폭행부터 살인까지 - 2020 총선 예비후보자 전수 분석',
    linktitle2 : '전과 18범부터 성범죄, 살인까지…총선 후보 분석',
    linktitle3 : '성폭행·살인·음주운전까지?…총선 예비 후보 전과 분석',
    linktitle4 : '20·30대 예비후보 고작 4%…청년 위한 정치는 어디로',
    linktitle5 : '우리 동네 후보, 넌 누구니?(a.k.a. 모여봐요, 국회의숲)',
    linktitle6 : ' 내 이상형 후보, 넌 어딨니?(a.k.a. 모여봐요, 비례의 숲)',
    linktitle7 : '승강기 없는 3층에 사전투표소…장애인은 어떻게?',
    linktitle8 : '여성 당선인 20% 벽 못 넘어…평균 연령 54.9세',
    linktitle9 : ' 21대 국회도 586 남성이 주류…당선인 300명 분석',
    link1 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005656957',
    link2 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005725723',
    link3 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005658805',
    link4 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005658806',
    link5 : 'http://mabu.newscloud.sbs.co.kr/2020election/',
    link6 : 'http://mabu.newscloud.sbs.co.kr/electionquiz/',
    link7 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005740356',
    link8 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005750278',
    link9 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005750890'
  },
  {
    img : 'url("http://img.sbs.co.kr/newimg/news/20200201/201398267.gif")',
    title : '신종 코로나 감염자 현황 \n 한번에 보자',
    pica : '#코로나',
    keyword : '코로나',
    p : '코로나19가 심상치 않다? 마부작침은 확진 초기부터 발 빠르게 확진자 현황 데이터를 수집해서 확진 경로 네트워크(network)를 비롯해 현황판, 통계 분석 등 다양한 데이터 분석 보도를 진행했다.',
    linktitle1 : '[마부작침/인터랙티브] 신종 코로나 감염자 현황, 한번에 보자',
    linktitle2 : '[마부작침/인터랙티브] 한눈에 보는 코로나19 타임라인',
    linktitle3 : '국내 확진자 평균 나이 42.9세…3분의 2는 남성',
    linktitle4 : '3월 들어 확진율 주춤…코로나19, 변곡점 왔나',
    linktitle5 : '코로나19 사망자 ① 고혈압 · ② 당뇨 질환 많았다',
    link1 : 'http://mabu.newscloud.sbs.co.kr/202002corona/web/index.html',
    link2 : 'http://mabu.newscloud.sbs.co.kr/202002corona2/',
    link3 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005631936',
    link4 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005683141',
    link5 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005685298'
  },
  {
    img : 'url("https://img.sbs.co.kr/newimg/news/20201229/201505961.jpg")',
    title : '의원님의 \n 수상한 예산심사는 \n 계속됩니다',
    pica : '#예산 #국회 #회의록',
    keyword : '예산',
    keyword2 : '국회',
    keyword2 : '회의록',
    award : '이 달의 기자상, 저번 달의 기자상',
    p : '2018년부터 이어져 온 마부작침의 예산안 분석 보도. 20회 국회의 마지막 예산 심사는 달라졌을까? 국회 예산회의록 4,795페이지와 상임위 심사보고서를 근거로 예산 심사를 분석해봤다.',
    linktitle1 : '안 된다는데 슬그머니…국회 편법 예산, 올해도 2조↑',
    linktitle2 : '5년간 한 푼 못 써도 매년 배정…<끼워넣기> 예산 여전',
    linktitle3 : ' ① 마지막 예산 국회도 그랬다',
    linktitle4 : ' ② 2020년 예산 심사에 부족했던 네 가지',
    linktitle5 : ' ③ 바뀌지 않는 문제 심사…21대는 달라질 수 있나',
    linktitle6 : '[마침] 의원님의 수상한 예산심사는 계속됩니다',
    linktitle7 : '[마침/인터랙티브] 의원님의 수상한 예산심사는 언제까지!',
    link1 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005618950',
    link2 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005619579',
    link3 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005623534',
    link4 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005623669',
    link5 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005623662',
    link6 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005628307',
    link7 : 'http://mabu.newscloud.sbs.co.kr/202002budget/'
  },
  {
    img : 'url("https://img.sbs.co.kr/newimg/news/20201229/201505966.jpg")',
    title : '그들은 왜 윤창호법을 \n 두려워하지 않을까',
    pica : '#교통안전 #판결문',
    keyword : '교통안전',
    keyword2 : '판결문',
    award : '이 달의 기자상, 저번 달의 기자상',
    p : '시행 1년을 맞은 윤창호법 과연 효과는 있었을까? 마부작침은 시행 전후 1년 치 판결문 176건을 수집해 실제로 윤창호법이 어느 정도 효과가 있었는지 분석해봤다.',
    linktitle1 : '① 윤창호법 1년…선고 형량 오히려 줄었다',
    linktitle2 : '② 술 마시고 사망사고 내도 <윤창호법> 적용 안 받는 이유는 ',
    linktitle3 : '③ 음주운전 초범이나 재범이나 별 차이 없는 형량',
    linktitle4 : '[마침] 그들은 왜 <윤창호법>을 두려워하지 않을까',
    link1 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005581440',
    link2 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005582887',
    link3 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005588156',
    link4 : 'https://news.sbs.co.kr/news/endPage.do?news_id=N1005588661'
  }

]

InitData();


//팝업 관련
const popup = document.getElementById("popup");
const popupbg = document.getElementById("popupbg");
const popupclose = document.getElementById("popclose");
const poph3 = document.getElementById("pop-h3");
const poph5 = document.getElementById("pop-h5");
const popp = document.getElementById("pop-p");
const dim = document.getElementById("dim");


const poplink1 = document.getElementById("pop-link1");
const poplink2 = document.getElementById("pop-link2");
const poplink3 = document.getElementById("pop-link3");
const poplink4 = document.getElementById("pop-link4");
const poplink5 = document.getElementById("pop-link5");
const poplink6 = document.getElementById("pop-link6");
const poplink7 = document.getElementById("pop-link7");
const poplink8 = document.getElementById("pop-link8");
const poplink9 = document.getElementById("pop-link9");
const poplink10 = document.getElementById("pop-link10");



popupclose.addEventListener("click", ()=> {
  dim.style.opacity = 0;
  dim.style.width = '0%';
  popupbg.classList.remove("widthUp");
  setTimeout(() => {
    popup.classList.remove("widthUp2");  
  }, 500);

})

//팝업 메소드
function Accordion()
{
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
  
      const result = data[this.dataset.index].title.replace(/(\r\n|\r|\n)/g, '<br>');
      poph3.innerHTML = result;
      poph5.innerHTML = data[this.dataset.index].pica;
      popp.innerHTML = data[this.dataset.index].p;

      //여기에 기사 링크들이 들어가면되려나?
      if(data[this.dataset.index].linktitle1 != null){
        poplink1.innerHTML = data[this.dataset.index].linktitle1;
        poplink1.href = data[this.dataset.index].link1;

      } else { poplink1.innerHTML = '';}
      if(data[this.dataset.index].linktitle2 != null){
        poplink2.innerHTML = data[this.dataset.index].linktitle2;
        poplink2.href = data[this.dataset.index].link2;

      } else { poplink2.innerHTML = '';}
      if(data[this.dataset.index].linktitle3 != null){
        poplink3.innerHTML = data[this.dataset.index].linktitle3;
        poplink3.href = data[this.dataset.index].link3;

      } else { poplink3.innerHTML = '';}
      if(data[this.dataset.index].linktitle4 != null){
        poplink4.innerHTML = data[this.dataset.index].linktitle4;
        poplink4.href = data[this.dataset.index].link4;

      } else { poplink4.innerHTML = '';}
      if(data[this.dataset.index].linktitle5 != null){
        poplink5.innerHTML = data[this.dataset.index].linktitle5;
        poplink5.href = data[this.dataset.index].link5;

      } else { poplink5.innerHTML = '';}
      if(data[this.dataset.index].linktitle6 != null){
        poplink6.innerHTML = data[this.dataset.index].linktitle6;
        poplink6.href = data[this.dataset.index].link6;

      } else { poplink6.innerHTML = '';}
      if(data[this.dataset.index].linktitle7 != null){
        poplink7.innerHTML = data[this.dataset.index].linktitle7;
        poplink7.href = data[this.dataset.index].link7;

      } else { poplink7.innerHTML = '';}
      if(data[this.dataset.index].linktitle8 != null){
        poplink8.innerHTML = data[this.dataset.index].linktitle8;
        poplink8.href = data[this.dataset.index].link8;

      } else { poplink8.innerHTML = '';}
      if(data[this.dataset.index].linktitle9 != null){
        poplink9.innerHTML = data[this.dataset.index].linktitle9;
        poplink9.href = data[this.dataset.index].link9;

      } else { poplink9.innerHTML = '';}
      if(data[this.dataset.index].linktitle10 != null){
        poplink10.innerHTML = data[this.dataset.index].linktitle10;
        poplink10.href = data[this.dataset.index].link10;

      } else { poplink10.innerHTML = '';}

    



      dim.style.opacity = 0.8;
      dim.style.width = '100%';
      popup.classList.add("widthUp2");
      setTimeout(() => {
        popupbg.classList.add("widthUp");
      }, 100);
      console.log(data[this.dataset.index].title );
    });
  }
}




//태그 영역
const tagcanvas = document.getElementById("tag-canvas");
let tags = new Array();

function Compare(string, string2) {
  return (string != string2)
}

//태그링크 생성
function InitKeyword(string)
{
  const word = document.createElement('span');
  if(string == "all"){
    word.classList.add('selected-year');
  }

  tagcanvas.appendChild(word);
  word.innerHTML = string;
  word.addEventListener("click" , ()=> {

    let x = document.getElementsByClassName('selected-year');
    if(x.length > 0) { x[0].classList.remove('selected-year'); }
    
    word.classList.add("selected-year");
    document.getElementById("canvas").innerHTML = '';
    InitData(string);
    Accordion();
  })
}


for(i in data)
{
  if(data[i].keyword != null)
  {
    if(tags.length == 0)
    { tags.push( data[i].keyword ); }
    else{
      if(!tags.includes(data[i].keyword))
      { tags.push( data[i].keyword ); }
    }
  }

  if(data[i].keyword2 != null)
  {
    if(tags.length == 0)
    { tags.push( data[i].keyword2 ); }
    else{
      if(!tags.includes(data[i].keyword2))
      { tags.push( data[i].keyword2 ); }
    }
  }

  if(data[i].keyword3 != null)
  {
    if(tags.length == 0)
    { tags.push( data[i].keyword3 ); }
    else{
      if(!tags.includes(data[i].keyword3))
      { tags.push( data[i].keyword3 ); }
    }
  }

}


InitKeyword("all");
for (i in tags)
{
  InitKeyword(tags[i]);
}
Accordion();