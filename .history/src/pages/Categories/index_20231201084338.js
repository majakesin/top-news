import React, { useEffect, useMemo } from 'react'
import Carousel from 'src/components/Carousel'
import NewsStore from 'src/stores/NewsStore'

import styles from './index.module.css';


const mockData = {
    "business": [
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Chiranjivi Chakraborty",
            "title": "Stock Futures Edge Higher on Fed Rate-Cut Bets: Markets Wrap - Yahoo Finance",
            "description": "(Bloomberg) -- European stocks climbed and the euro retreated after weak French data boosted bets on rate cuts by the European Central Bank. Most Read from...",
            "url": "https://finance.yahoo.com/news/asia-stocks-muted-fed-speak-224420179.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/pRyC0P5r7BhLZa6Pn9Pbaw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/6bcdddfb8d6a844be4723f98a032f329",
            "publishedAt": "2023-11-30T07:32:00Z",
            "content": "(Bloomberg) -- European stocks climbed and the euro retreated after weak French data boosted bets on rate cuts by the European Central Bank.\r\nMost Read from Bloomberg\r\nThe Stoxx 600 index edged 0.1% … [+4122 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Alexandra Schwarz-Goerlich, John O'Donnell, Emma-Victoria Farr",
            "title": "Europe's Signa toppled in property rout - Reuters",
            "description": "Property and retail giant Signa declared insolvency on Wednesday after last-ditch attempts to secure fresh funding failed, making it the biggest casualty so far of Europe's property crash.",
            "url": "https://www.reuters.com/markets/europe/austrias-signa-launch-self-administrated-insolvency-proceedings-2023-11-29/",
            "urlToImage": "https://www.reuters.com/resizer/oyeqDFzsp9Kz4QVietPYmYjQ0FE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JF2VLMWOD5P2NOA6M3EY3OHMQQ.jpg",
            "publishedAt": "2023-11-30T05:48:00Z",
            "content": "VIENNA/FRANKFURT, Nov 29 (Reuters) - Property and retail giant Signa declared insolvency on Wednesday after last-ditch attempts to secure fresh funding failed, making it the biggest casualty so far o… [+5740 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Singapore, Zurich world's most expensive cities - EIU - Reuters",
            "description": "Singapore and Zurich tied for the world's most expensive city this year, followed by Geneva, New York and Hong Kong, the Economist Intelligence Unit (EIU) said on Thursday as it cautioned that the global cost-of-living crisis was not yet over.",
            "url": "https://www.reuters.com/world/singapore-zurich-worlds-most-expensive-cities-eiu-2023-11-30/",
            "urlToImage": "https://www.reuters.com/resizer/l2_CJpWUDJ9gWxs7HHgdwbaVNZ4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HNQHIO4VEZK7PPK36AJCBECGGU.jpg",
            "publishedAt": "2023-11-30T04:50:00Z",
            "content": "HONG KONG, Nov 30 (Reuters) - Singapore and Zurich tied for the world's most expensive city this year, followed by Geneva, New York and Hong Kong, the Economist Intelligence Unit (EIU) said on Thursd… [+1280 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "FRANCE 24 English"
            },
            "author": "France 24",
            "title": "After 50 years, US to return to Moon on January 25 - FRANCE 24 English",
            "description": "More than 50 years after the last Apollo mission, the United States will try once again to land a craft on the Moon on January 25, said the head of what could be the first private company to successfully touch down on the lunar surface.",
            "url": "https://www.france24.com/en/live-news/20231130-after-50-years-us-to-return-to-moon-on-january-25",
            "urlToImage": "https://s.france24.com/media/display/f0acd2aa-8f29-11ee-a9c5-005056bf30b7/w:1280/p:16x9/Part-GTY-1244877208-1-1-1.jpg",
            "publishedAt": "2023-11-30T02:41:19Z",
            "content": "Washington (AFP) More than 50 years after the last Apollo mission, the United States will try once again to land a craft on the Moon on January 25, said the head of what could be the first private co… [+2457 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Doc Louallen",
            "title": "Powerball winning numbers for 11/29/23 drawing, $374 million jackpot - USA TODAY",
            "description": "The Powerball jackpot for Wednesday night's drawing was approaching $400 million. Here are the winning numbers.",
            "url": "https://www.usatoday.com/story/money/lottery/2023/11/29/powerball-winning-numbers/71747985007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/20/USAT/71651943007-lotteryballs-20.png?crop=3653,2055,x327,y5&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2023-11-30T02:25:07Z",
            "content": "The Powerball jackpot for the next drawing on Wednesday is now worth an estimated $374 million after no winner was produced in Monday's drawing.\r\nThe numbers were chosen just after 11 p.m. ET Wednesd… [+3315 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Gas prices are down as U.S. oil production is back up to record levels - NBC News",
            "description": "Gas prices are falling in parts of the U.S., with drivers in 16 states now paying $3.00 or less per gallon. At the same time, U.S. oil production has returne...",
            "url": "https://www.youtube.com/watch?v=hpQRMaJomcM",
            "urlToImage": "https://i.ytimg.com/vi/hpQRMaJomcM/maxresdefault.jpg",
            "publishedAt": "2023-11-30T01:45:02Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Jeff Marks",
            "title": "Salesforce shares are deservedly rewarded after a stellar quarter and a rosy outlook - CNBC",
            "description": "On top of quarterly beats nearly across the board, a solid fiscal Q4 profitability guide helped send shares soaring.",
            "url": "https://www.cnbc.com/2023/11/29/salesforce-is-rewarded-after-delivering-a-stellar-quarter-and-rosy-outlook.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107202410-1677779234438-gettyimages-1176566250-AFP_1LJ4X0.jpeg?v=1701306625&w=1920&h=1080",
            "publishedAt": "2023-11-30T01:38:00Z",
            "content": null
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Axios",
            "title": "OpenAI formalizes Sam Altman's return, gives Microsoft non-voting board seat - Axios",
            "description": null,
            "url": "https://www.axios.com/2023/11/30/openai-sam-altman-return-new-board-chatgpt",
            "urlToImage": null,
            "publishedAt": "2023-11-30T01:21:51Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "Cointelegraph"
            },
            "author": "Jesse Coghlan",
            "title": "Bitcoin ETF race gets 13th entrant, BlackRock revises ETF model - Cointelegraph",
            "description": "Swiss firm Pando filed for a U.S. spot Bitcoin ETF, and BlackRock pitched a new ETF model.",
            "url": "https://cointelegraph.com/news/pando-spot-bitcoin-etf-blackrock-revises-etf",
            "urlToImage": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-11/eae526e2-f709-4d31-83a6-7a4b83382fdc.jpg",
            "publishedAt": "2023-11-30T00:47:11Z",
            "content": "Swiss asset manager Pando Asset has become an unexpected late entrant into the spot Bitcoin (BTC) exchange-traded fund (ETF) race in the United States.\r\nOn the same day, investment giant BlackRock me… [+2985 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Lisa Richwine",
            "title": "Disney CEO Iger promises 2026 exit, says ABC not for sale - Reuters",
            "description": "Walt Disney <a href=\"https://www.reuters.com/markets/companies/DIS.N\" target=\"_blank\">(DIS.N)</a> Chief Executive Bob Iger said on Wednesday he would \"definitely\" step down when his current contract ends in 2026 and that the ABC broadcast network was not for …",
            "url": "https://www.reuters.com/business/media-telecom/disney-ceo-step-down-end-2026-2023-11-29/",
            "urlToImage": "https://www.reuters.com/resizer/UF1U8Pocw0qAwCxyvVZQMUZbAT4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YYOGTVLW2RJ67DJ6HUK6YL5MTA.jpg",
            "publishedAt": "2023-11-30T00:39:00Z",
            "content": "LOS ANGELES, Nov 29 (Reuters) - Walt Disney (DIS.N) Chief Executive Bob Iger said on Wednesday he would \"definitely\" step down when his current contract ends in 2026 and that the ABC broadcast networ… [+2882 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": "Michael Mackenzie, Liz Capo McCormick",
            "title": "US Treasury Market Has Best Month Since 1980s, Leading Stocks, Credit to Rally - Bloomberg",
            "description": "In a year in which little has gone right in the US bond market, November turned out to be a month for the record books.",
            "url": "https://www.bloomberg.com/news/articles/2023-11-30/biggest-blowout-in-bonds-since-the-1980s-sparks-everything-rally",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iCEiiHEnezYE/v0/1200x800.jpg",
            "publishedAt": "2023-11-30T00:31:21Z",
            "content": "In a year in which little has gone right in the US bond market, November turned out to be a month for the record books.\r\nInvestors frantically bid up the price of Treasuries, agency and mortgage debt… [+272 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Aarian Marshall",
            "title": "Tesla's Cybertruck Is Two Years Late and Still Crazy - WIRED",
            "description": "After years of delays, Tesla will livestream its Cybertruck delivery event Thursday. Car experts still can’t believe it’s trying to mass-produce a vehicle with such a challenging design.",
            "url": "https://www.wired.com/story/tesla-cybertruck-two-years-late-still-crazy/",
            "urlToImage": "https://media.wired.com/photos/6566812ed58c6ff717fd8b05/191:100/w_1280,c_limit/Cybertruck-Delivery-Event-Business-Alamy-2T9H8CH.jpg",
            "publishedAt": "2023-11-30T00:12:30Z",
            "content": "Paul Snyder has mixed feelings about Teslas Cybertruck, the first of which will be unveiled during an event for investors and fans on Thursday in Austin, Texas. One of them is horror.\r\nWhen Tesla rev… [+3612 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Breck Dumas",
            "title": "EVs significantly less reliable than gas-engine cars, Consumer Reports finds - Fox Business",
            "description": "A Consumer Reports survey of auto owners found electric vehicles have nearly 80% more problems than gas vehicles on average, and plug-in hybrids are even worse.",
            "url": "https://www.foxbusiness.com/markets/hybrid-ev-models-significantly-less-reliable-gas-engine-cars-consumer-reports",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/11/0/0/traffic-jam.jpg?ve=1&tl=1",
            "publishedAt": "2023-11-29T23:34:00Z",
            "content": "Electric vehicles are much less reliable on average than those with traditional internal combustion engines, according to new data from Consumer Reports.\r\nThe magazine's annual auto reliability brand… [+4808 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Asher Stockler",
            "title": "Chopt lawsuit: Woman sues restaurant over claims of finger in salad - USA TODAY",
            "description": "In the lawsuit, the woman says she was eating the salad and realized she was \"chewing on a portion of a human finger.\"",
            "url": "https://www.usatoday.com/story/news/nation/2023/11/29/chopt-lawsuit-connecticut-restaurant-finger-in-salad-claims/71744198007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/28/PWES/71726278007-mv-112823-chopt-02.JPG?crop=6310,3550,x0,y650&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2023-11-29T23:29:48Z",
            "content": "A Connecticut woman sued the fast-casual restaurant chain Chopt on Monday after she says her salad was adulterated with part of a human finger she inadvertently chewed on.\r\nAllison Cozzi, of Greenwic… [+2164 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "DEE-ANN DURBIN",
            "title": "Kraft debuts dairy-free mac and cheese in the US - The Associated Press",
            "description": "Kraft Heinz says it’s bringing dairy-free macaroni and cheese to the U.S. for the first time. The company says the new recipe has the same creamy texture and flavor of the beloved 85-year-old original but replaces dairy with ingredients like fava bean protein…",
            "url": "https://apnews.com/article/kraft-mac-cheese-plantbased-dairy-c709b37044fedc653e2851e864e9f3bf",
            "urlToImage": "https://dims.apnews.com/dims4/default/9f11df1/2147483647/strip/true/crop/2836x1595+0+148/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F41%2F2d%2F05b7d51ace50ca65254bd67cb73a%2Fb70dc0e0ec3a42fc94c3f2092943855e",
            "publishedAt": "2023-11-29T23:24:00Z",
            "content": "Kraft Macaroni and Fava Beans?\r\nThe Kraft Heinz Co. said Wednesday its bringing dairy-free macaroni and cheese to the U.S. for the first time. The company said the new recipe has the same creamy text… [+1640 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Jeanne Whalen",
            "title": "UAW begins drive to organize Toyota, Tesla, Honda, VW and others - The Washington Post",
            "description": "United Auto Workers launches a campaign to expand on labor success, with a new website where workers record their interest in joining the union.",
            "url": "https://www.washingtonpost.com/business/2023/11/29/uaw-toyota-tesla-organize/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3VGKUVVKO6BZQPOIW6X47SIE4Q.JPG&w=1440",
            "publishedAt": "2023-11-29T23:08:00Z",
            "content": "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nThe United Auto Workers announced a drive to organize the U.S. factories of Toyota, Tesla, Honda and the nations other non-unionized a… [+6315 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investor's Business Daily"
            },
            "author": "Investor's Business Daily",
            "title": "Snowflake Earnings, Revenue Top Estimates As Cloud Spending Rebounds - Investor's Business Daily",
            "description": "SNOW stock climbed after Snowflake reported Q3 earnings and revenue that topped estimates amid stabilizing growth at cloud partner Amazon.",
            "url": "https://www.investors.com/news/technology/snow-stock-snowflake-earnings-news-q32023/",
            "urlToImage": "https://www.investors.com/wp-content/uploads/2021/05/Stock-snowflake-04-shutt.jpg",
            "publishedAt": "2023-11-29T22:56:00Z",
            "content": "Snowflake (SNOW) on Wednesday reported third quarter earnings and revenue that topped estimates amid stabilizing growth at cloud computing partner Amazon.com (AMZN). Guidance for SNOW stock came in a… [+2366 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Nicole Goodkind",
            "title": "Jamie Dimon says to be prepared for recession - CNN",
            "description": "JPMorgan Chase CEO Jamie Dimon issued a stark warning to Wall Street on Wednesday: Inflation could rise further and recession is not off the table.",
            "url": "https://www.cnn.com/2023/11/29/investing/jamie-dimon-recession-jpmorgan-economy/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1820431413.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-11-29T22:10:00Z",
            "content": "JPMorgan Chase CEO Jamie Dimon issued a stark warning to Wall Street on Wednesday: Inflation could rise further and recession is not off the table.\r\nA lot of things out there are dangerous and inflat… [+2454 chars]"
        }
    ],
    "general": [
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "USA TODAY",
            "title": "US military Osprey crash: Aircraft with 6 aboard crashes off southern Japan - USA TODAY",
            "description": null,
            "url": "https://www.usatoday.com/story/news/world/2023/11/29/us-military-osprey-crash-off-southern-japan/71738009007/",
            "urlToImage": null,
            "publishedAt": "2023-11-30T08:26:34Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Two Palestinians open fire at Jerusalem bus stop, killing three -police - Reuters",
            "description": "Two Palestinian attackers opened fire at a bus stop during the morning rush hour on Thursday at the entrance to Jerusalem, killing at least three people and wounding eight others, Israeli police said.",
            "url": "https://www.reuters.com/world/middle-east/shooting-attack-jerusalem-wounds-least-6-ambulance-service-2023-11-30/",
            "urlToImage": "https://www.reuters.com/resizer/6uDp4U0uF4hzFYV9epUw1cKBa6s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SYATCWYILZJXBCMV62IHCMDTNE.jpg",
            "publishedAt": "2023-11-30T08:22:00Z",
            "content": "JERUSALEM, Nov 30 (Reuters) - Two Palestinian attackers opened fire at a bus stop during the morning rush hour on Thursday at the entrance to Jerusalem, killing at least three people and wounding eig… [+1840 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Rachel Pannett, Andrew Jeong, Niha Masih, Annabelle Timsit, Jennifer Hassan, Shira Rubin, Lior Soroka, Naomi Schanen, Hannah Allam, Louisa Loveluck, Claire Parker, Meg Kelly, Ben Brasch, Joanna Slater",
            "title": "Israel-Gaza war live updates: Israel and Hamas agree to extend pause in fighting in Gaza, Qatar says - The Washington Post",
            "description": "A pause in fighting in Gaza had been set to end Thursday, but an eleventh-hour deal extended it for one more day.",
            "url": "https://www.washingtonpost.com/world/2023/11/30/israel-hamas-war-news-gaza-hostages-palestine/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MCL4CEGGMR2PHWSLMMDVX44NNU_size-normalized.jpg&w=1440",
            "publishedAt": "2023-11-30T07:59:05Z",
            "content": "Israel and Hamas said Thursday they have agreed to extend the pause in fighting in Gaza for another day. Hamas freed 16 hostages and Israel released 30 imprisoned Palestinians on Wednesday and both s… [+648 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Chiranjivi Chakraborty",
            "title": "Stock Futures Edge Higher on Fed Rate-Cut Bets: Markets Wrap - Yahoo Finance",
            "description": "(Bloomberg) -- European stocks climbed and the euro retreated after weak French data boosted bets on rate cuts by the European Central Bank. Most Read from...",
            "url": "https://finance.yahoo.com/news/asia-stocks-muted-fed-speak-224420179.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/pRyC0P5r7BhLZa6Pn9Pbaw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/6bcdddfb8d6a844be4723f98a032f329",
            "publishedAt": "2023-11-30T07:32:00Z",
            "content": "(Bloomberg) -- European stocks climbed and the euro retreated after weak French data boosted bets on rate cuts by the European Central Bank.\r\nMost Read from Bloomberg\r\nThe Stoxx 600 index edged 0.1% … [+4122 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Suntimes.com"
            },
            "author": "Georgia Nicols",
            "title": "Horoscope for Thursday, Nov, 30, 2023 - Chicago Sun-Times",
            "description": null,
            "url": "https://chicago.suntimes.com/2023/11/30/23981710/horoscopes-today-thursday-nov-30-2023",
            "urlToImage": "https://cst.brightspotcdn.com/dims4/default/774563e/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F7IoDv3-dJvi-DKHuw2tYJCTWbio%3D%2F0x0%3A870x630%2F870x630%2Ffilters%3Afocal%28435x315%3A436x316%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F25121138%2FGeorgia_mug.jpeg",
            "publishedAt": "2023-11-30T06:02:06Z",
            "content": "Moon Alert\r\nThere are no restrictions to shopping or important decisions. The moon is in Cancer.\r\nAries (March 21-April 19)\r\nYou might entertain unusual friends or groups, or a spontaneous gathering … [+3921 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gulte"
            },
            "author": "Satya B",
            "title": "Telangana Polls: #ByeByeKCR Trending! - Gulte",
            "description": "The keenly anticipated day in Telangana political landscape is here. The state is going to polls today with the voters queuing up at polling centers from 7 AM. The polling commenced at 8 AM and the state has seen good number of percentage of polled votes till…",
            "url": "https://www.gulte.com/political-news/270236/telangana-polls-byebyekcr-trending",
            "urlToImage": "https://cdn.gulte.com/wp-content/uploads/2023/07/kcr-2.jpg",
            "publishedAt": "2023-11-30T05:34:44Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Ben Blanchard, Andrew Silver",
            "title": "Taiwan urges elderly, young to avoid China visits due to respiratory illnesses - Reuters",
            "description": "Taiwan's health ministry on Thursday urged the elderly, very young and those with poor immunity to avoid travel to China due to the recent increase in respiratory illnesses there, a move some experts said was ineffective to manage public health risks.",
            "url": "https://www.reuters.com/world/asia-pacific/taiwan-urges-elderly-young-avoid-china-visits-due-respiratory-illnesses-2023-11-30/",
            "urlToImage": "https://www.reuters.com/resizer/DcLX87_dBLUFVfpCpTaoQMgYiYM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/O7UWNWGTAFPU3M2L4XGSZ3V74U.jpg",
            "publishedAt": "2023-11-30T04:17:54Z",
            "content": "TAIPEI/SHANGHAI, Nov 30 (Reuters) - Taiwan's health ministry on Thursday urged the elderly, very young and those with poor immunity to avoid travel to China due to the recent increase in respiratory … [+2409 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "World Health Organization"
            },
            "author": null,
            "title": "World AIDS Day 2023 – events in Geneva and around the world - World Health Organization",
            "description": "World AIDS Day 2023 events in Geneva and around the world under the theme ‘Let communities lead’.",
            "url": "https://www.who.int/news-room/events/detail/2023/12/01/default-calendar/world-aids-day-2023-events-in-geneva-and-around-the-world",
            "urlToImage": "https://cdn.who.int/media/images/default-source/who-campaigns/world-aids-day-2023/aids-day-2023-banner03.tmb-1200v.png?sfvrsn=30ed912d_15",
            "publishedAt": "2023-11-30T04:10:01Z",
            "content": "On 1st December, WHO, together with communities and partners will commemorate World AIDS Day 2023, under the theme “Let communities lead”.\r\nCommunities living with, and affected by, HIV, networks of … [+2501 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "Los Angeles Times"
            },
            "author": "Jeremy Childs, Richard Winton",
            "title": "Michael Latt killed inside his home; social justice advocate had deep ties to Hollywood - Los Angeles Times",
            "description": "Michael Latt, a marketing consultant and social justice advocate with deep ties to Hollywood, was killed Monday at his Los Angeles home. He was 33.",
            "url": "https://www.latimes.com/entertainment-arts/story/2023-11-29/michael-latt-social-justice-advocate-with-deep-ties-to-hollywood-dies-at-33",
            "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/e441fb6/2147483647/strip/true/crop/1448x760+0+110/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F55%2Fd4%2F8aa7b92544978520a019e90bb64c%2F476779316-1.jpg",
            "publishedAt": "2023-11-30T03:24:00Z",
            "content": "Michael Latt, a marketing consultant and social justice advocate with strong ties to Hollywood, died Monday after a woman entered his home and fired a bullet that struck him in the head, law enforcem… [+3522 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "FRANCE 24 English"
            },
            "author": "France 24",
            "title": "After 50 years, US to return to Moon on January 25 - FRANCE 24 English",
            "description": "More than 50 years after the last Apollo mission, the United States will try once again to land a craft on the Moon on January 25, said the head of what could be the first private company to successfully touch down on the lunar surface.",
            "url": "https://www.france24.com/en/live-news/20231130-after-50-years-us-to-return-to-moon-on-january-25",
            "urlToImage": "https://s.france24.com/media/display/f0acd2aa-8f29-11ee-a9c5-005056bf30b7/w:1280/p:16x9/Part-GTY-1244877208-1-1-1.jpg",
            "publishedAt": "2023-11-30T02:41:19Z",
            "content": "Washington (AFP) More than 50 years after the last Apollo mission, the United States will try once again to land a craft on the Moon on January 25, said the head of what could be the first private co… [+2457 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Henry Kissinger, American diplomat and Nobel winner, dead at 100 - Reuters",
            "description": "Henry Kissinger, a diplomatic powerhouse whose roles as a national security adviser and secretary of state under two presidents left an indelible mark on U.S. foreign policy and earned him a controversial Nobel Peace Prize, died on Wednesday at age 100.",
            "url": "https://www.reuters.com/world/us/henry-kissinger-american-diplomat-nobel-winner-dead-100-2023-11-30/",
            "urlToImage": "https://www.reuters.com/resizer/1JanO9-Jqlq5GHQ1M4eiLgK7P5Y=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ICPB44TKTVITJANL36SL7MT5Q4.jpg",
            "publishedAt": "2023-11-30T01:59:53Z",
            "content": "Nov 29 (Reuters) - Henry Kissinger, a diplomatic powerhouse whose roles as a national security adviser and secretary of state under two presidents left an indelible mark on U.S. foreign policy and ea… [+7936 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "As.com"
            },
            "author": "As.com, Greg Heilman",
            "title": "An exceptional solar system discovered: its planets have resonant orbits - AS USA",
            "description": "A six-planet solar system around the star HD110067, a near sun-like star roughly one hundred light years away, has stunned scientists by its rarity.",
            "url": "https://en.as.com/latest_news/an-exceptional-solar-system-discovered-its-planets-have-resonant-orbits-n/",
            "urlToImage": "https://img.asmedia.epimg.net/resizer/2mYEMAblt1X7X5oBNDT7QTb7VRQ=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/46NAOQPR7NFARCH4HMRWPNNEUU.jpg",
            "publishedAt": "2023-11-30T01:58:36Z",
            "content": "A solar system that has not undergone major changes since its formation is very rare, but there is a star a little more than one hundred light years from Earth that is just so. Orbited by six planets… [+3165 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Oakridger.com"
            },
            "author": "Diana Leyva",
            "title": "'Christmas at Graceland' 2023 special: Watch Lana Del Rey and more - Oakridger",
            "description": "John Legend, Kacey Musgraves, Lana Del Rey and more will perform in honor of Elvis and his \"cherished Christmases in Memphis.\" Here's what to know.",
            "url": "https://www.oakridger.com/story/entertainment/tv/2023/11/29/christmas-at-graceland-2023-special-how-to-watch/71747856007/",
            "urlToImage": "https://www.oakridger.com/gcdn/authoring/authoring-images/2023/11/30/USAT/71749371007-nup-202445-02512.JPG?crop=999,562,x0,y0&width=999&height=562&format=pjpg&auto=webp",
            "publishedAt": "2023-11-30T01:44:45Z",
            "content": "Some of music's biggest names including John Legend, Kacey Musgraves, Lana Del Rey and Lainey Wilson are set to honor Elvis Presley during NBC's \"Christmas at Graceland\" on Wednesday night.\r\nThe arti… [+1993 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "mlive.com"
            },
            "author": "Mark Torregrossa | mtorregr@mlive.com",
            "title": "Powerful geomagnetic storm now pegged as ‘likely’, get ready for northern lights - MLive.com",
            "description": "The Space Weather Prediction Center of NOAA now thinks a geomagnetic storm is likely heading straight toward Earth.",
            "url": "https://www.mlive.com/weather/2023/11/powerful-geomagnetic-storm-now-pegged-as-likely-get-ready-for-northern-lights.html",
            "urlToImage": "https://www.mlive.com/resizer/kYIkkgEWIqoeJPtbeAIO5p4SiqM=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/4AHZETO2KNBYVEIY5STE2XZPEU.png",
            "publishedAt": "2023-11-30T01:43:00Z",
            "content": "Three blasts of energy from the sun are likely heading right toward Earth. Space weather forecasters believe this geomagnetic storm will create northern lights.\r\nNOAAs Space Weather Prediction Center… [+2498 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Beast"
            },
            "author": "Laura Bradley",
            "title": "'Golden Bachelor' Ex Claims He Was a Gold-Plated Jerk - The Daily Beast",
            "description": "Gerry Turner’s rosy reputation largely stems from his claim that he hasn’t seriously dated since his late wife’s death. Now, an alleged ex claims that this is far from the truth.",
            "url": "https://www.thedailybeast.com/golden-bachelor-gerry-turners-ex-claims-he-was-a-gold-plated-jerk",
            "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_375,w_668,x_118,y_383/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1701299494/GettyImages-1758572750_gyjk2t",
            "publishedAt": "2023-11-30T01:41:00Z",
            "content": "Golden BachelorGerry Turner quickly worked his way into Bachelor Nations hearts with a very romantic, very sad story: He and his late wife, Toni, were high school sweethearts who were married for dec… [+2439 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Tiger Woods gets loose ahead of Hero World Challenge | Golf Today | Golf Channel - Golf Channel",
            "description": "The Golf Today crew breaks down how Tiger Woods looked in his pro-am practice round at the Hero World Challenge before Todd Lewis provides updates from the B...",
            "url": "https://www.youtube.com/watch?v=s2l3vvg2OfQ",
            "urlToImage": "https://i.ytimg.com/vi/s2l3vvg2OfQ/maxresdefault.jpg",
            "publishedAt": "2023-11-30T00:37:21Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Oregon Ducks vs. Washington Huskies | Pac-12 Championship Game Preview 🏆 | College Football - 247Sports",
            "description": "A College Football Playoff berth is at stake as the Washington Huskies and Oregon Ducks face each other in the FINAL Pac-12 title game. Eric Skopil (@duckter...",
            "url": "https://www.youtube.com/watch?v=IgPfmSwnuMU",
            "urlToImage": "https://i.ytimg.com/vi/IgPfmSwnuMU/maxresdefault.jpg",
            "publishedAt": "2023-11-30T00:00:07Z",
            "content": null
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Kevin Collier, Miguel Almaguer",
            "title": "Some emergency rooms resume service after ransomware attack - NBC News",
            "description": "Several emergency rooms that shut down after a criminal cyberattack hit their parent company are resuming service, though lingering problems remain for some patients.",
            "url": "https://www.nbcnews.com/tech/security/emergency-rooms-resume-service-ransomware-attack-rcna127161",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-11/232229-Lovelace-Health-System-cyber-attack-mjf-1308-59e014.jpg",
            "publishedAt": "2023-11-29T23:19:57Z",
            "content": "Several emergency rooms that shut down after a criminal cyberattack hit their parent company are resuming service, though lingering problems remain for some patients. \r\nMultiple hospitals across four… [+2353 chars]"
        }
    ],
    "technology": [
        {
            "source": {
                "id": null,
                "name": "Pure Xbox"
            },
            "author": "Pure Xbox",
            "title": "Remnant 2 And Remnant: From The Ashes Get Surprise Xbox Game Pass Release - Pure Xbox",
            "description": null,
            "url": "https://www.purexbox.com/news/2023/11/remnant-2-and-remnant-from-the-ashes-get-surprise-xbox-game-pass-release",
            "urlToImage": null,
            "publishedAt": "2023-11-30T07:06:08Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "SamMobile"
            },
            "author": "SamMobile, Asif Iqbal Shaik",
            "title": "Rumor claims Galaxy S24 won't have 12GB RAM, while Ultra lacks 16GB RAM - SamMobile - Samsung news",
            "description": "Samsung is less than two months away from announcing its next-generation flagship smartphone. And several features of the upcoming devices ...",
            "url": "https://www.sammobile.com/news/base-galaxy-s24-no-12gb-ram-rumor/",
            "urlToImage": "https://www.sammobile.com/wp-content/uploads/2023/11/Samsung-Galaxy-S24-Ultra-Bezels-720x405.jpg",
            "publishedAt": "2023-11-30T05:22:00Z",
            "content": "Samsung is less than two months away from announcing its next-generation flagship smartphone. And several features of the upcoming devices have leaked over the past few months. Some rumors claimed th… [+2022 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Apple and Google avoid naming ChatGPT as their ‘app of the year,’ picking AllTrails and Imprint instead - TechCrunch",
            "description": "Both Apple and Google today announced their best apps and games of the year, with the hiking and biking companion AllTrails winning as Apple's iPhone App",
            "url": "https://techcrunch.com/2023/11/29/apple-and-google-avoid-naming-chatgpt-as-their-app-of-the-year-picking-alltrails-and-imprint-instead/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/12/gold-apps-.png?w=1142",
            "publishedAt": "2023-11-30T04:00:00Z",
            "content": "Both Apple and Google today announced their best apps and games of the year, with the hiking and biking companion AllTrails winning as Apple’s iPhone App of the Year in 2023, while the educational ap… [+6804 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Apple Newsroom"
            },
            "author": null,
            "title": "Apple unveils App Store Award winners, the best apps and games of 2023 - Apple",
            "description": "The 2023 App Store Awards recognize 14 apps and games that empowered users’ creativity, introduced a world of new adventures, and more.",
            "url": "https://www.apple.com/newsroom/2023/11/apple-unveils-app-store-award-winners-the-best-apps-and-games-of-2023/",
            "urlToImage": "https://www.apple.com/newsroom/images/2023/11/apple-unveils-app-store-award-winners-the-best-apps-and-games-of-2023/tile/Apple-Store-Awards-2023-design-lp.jpg.og.jpg?202311300408",
            "publishedAt": "2023-11-30T03:59:50Z",
            "content": "November 29, 2023\r\nPRESS RELEASE\r\nApple unveils App Store Award winners, the best apps and games of 2023\r\nCUPERTINO, CALIFORNIA Apple today unveiled the winners of the 2023 App Store Awards, recogniz… [+5857 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nintendo Life"
            },
            "author": "Liam Doolan",
            "title": "Xbox Reiterates Interest In Bringing Game Pass To \"Every Screen\" Including Nintendo Platforms - Nintendo Life",
            "description": "\"It's a bit of a change of strategy\"",
            "url": "https://www.nintendolife.com/news/2023/11/xbox-reiterates-interest-in-bringing-game-pass-to-every-screen-including-nintendo-platforms",
            "urlToImage": "https://images.nintendolife.com/58652f4bff532/1280x720.jpg",
            "publishedAt": "2023-11-30T02:30:00Z",
            "content": "Microsoft and Xbox have mentioned on a number of occasions how they want to make gaming more accessible than ever before, and during a recent appearance at the Wells Fargo TMT Summit earlier this wee… [+1123 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Push Square"
            },
            "author": "Khayl Adam",
            "title": "Dragon's Dogma 2 Ushers In New Age of $70 Capcom Games - Push Square",
            "description": "Pay homage to your Capgod",
            "url": "https://www.pushsquare.com/news/2023/11/dragons-dogma-2-ushers-in-new-age-of-usd70-capcom-games",
            "urlToImage": "https://images.pushsquare.com/119b62c0537c5/1280x720.jpg",
            "publishedAt": "2023-11-30T02:00:00Z",
            "content": "Anticipation is high for Dragon's Dogma 2, the awe-inspiring sequel to Capcom's cult classic action RPG, Dragon's Dogma. But punters had best be prepared to pay a premium: the PS5 standard edition wi… [+789 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Travis Northup",
            "title": "Bungie Pulls Destiny 2's Controversial $15 Starter Pack Over Massive Backlash Over 'Pay-to-Win' Item - IGN",
            "description": "Just one day after the launch of Season of the Wish, Bungie has removed a $15 \"starter pack\" microtransaction for Destiny 2 that quickly became the subject of criticism and backlash over pay-to-win concerns.",
            "url": "https://www.ign.com/articles/bungie-pulls-destiny-2s-controversial-15-starter-pack-over-massive-backlash-over-pay-to-win-item",
            "urlToImage": "https://assets-prd.ignimgs.com/2023/11/29/screenshot-353-1701258908316.png?width=1280",
            "publishedAt": "2023-11-30T00:06:57Z",
            "content": "Just one day after the launch of Season of the Wish, Bungie has removed a $15 \"starter pack\" microtransaction for Destiny 2 that quickly became the subject of criticism and backlash over pay-to-win c… [+2918 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nintendo Life"
            },
            "author": "Alana Hagues",
            "title": "Video: 12 Exciting New Games Coming To Nintendo Switch In December 2023 - Nintendo Life",
            "description": "Dragon Quest! Batman! Pokémon DLC!",
            "url": "https://www.nintendolife.com/news/2023/11/video-12-exciting-new-games-coming-to-nintendo-switch-in-december-2023",
            "urlToImage": "https://images.nintendolife.com/717334c5e318e/1280x720.jpg",
            "publishedAt": "2023-11-29T23:50:18Z",
            "content": "Subscribe to Nintendo Life on YouTube\r\nWell, geez, we're less than a month away from Christmas and the holiday season, and we're just over a month away from 2024. Guess it's time to look at the final… [+2376 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Alex Heath",
            "title": "Ex-Apple employees new startup wants to bring AI to the desktop - The Verge",
            "description": "After selling their last startup, Workflow, to Apple, the co-founders have made a new startup called Software Applications Incorporated that wants to bring generative AI to the desktop.",
            "url": "https://www.theverge.com/2023/11/29/23981802/software-applications-inc-workflow-shortcuts-apple-employees-startup",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/euks5XFRrHuyiWioD-lbFYRKXpA=/0x0:4639x3093/1200x628/filters:focal(2725x944:2726x945)/cdn.vox-cdn.com/uploads/chorus_asset/file/25121269/Software_Inc_cofounders.jpg",
            "publishedAt": "2023-11-29T23:05:45Z",
            "content": "These ex-Apple employees are bringing AI to the desktop\r\nThese ex-Apple employees are bringing AI to the desktop\r\n / After selling Workflow to Apple in 2017, the co-founders are back with a new start… [+4897 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Louis Casiano",
            "title": "Multiple cars stranded after Google Maps leads them 'straight into the desert with no road' - Fox Business",
            "description": "Google has apologized to a group of drivers who were routed through the Mojave Desert as a deter for a closed freeway between Las Vegas and Los Angeles.",
            "url": "https://www.foxbusiness.com/lifestyle/multiple-cars-stranded-google-maps-leads-straight-desert-no-road",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/11/0/0/GettyImages-1541148382.jpg?ve=1&tl=1",
            "publishedAt": "2023-11-29T22:40:00Z",
            "content": "Google has apologized to travelers who were directed to the Mojave Desert in California whiletraveling from Las Vegas to Los Angeles. \r\nShelby Easler posted the video on TikTok showing what happened … [+1417 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jay Peters",
            "title": "Evernote is about to seriously limit its plan for free users - The Verge",
            "description": "Evernote is going to limit new and existing free users to a maximum of just 50 notes and one notebook starting December 4th.",
            "url": "https://www.theverge.com/2023/11/29/23981683/evernote-limit-free-plan-notebook",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/eNyyCrECf0wpLpzdmDEgX3eTV7s=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/15961654/jbareham_190314_3294_0011_2.jpg",
            "publishedAt": "2023-11-29T22:35:19Z",
            "content": "Evernote is about to seriously limit its plan for free users\r\nEvernote is about to seriously limit its plan for free users\r\n / Free users will be limited to 50 notes and one notebook starting in Dece… [+1914 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Suicide Squad: Kill the Justice League - Official Deadshot Trailer - IGN",
            "description": "Suicide Squad: Kill the Justice League is a third-person co-op action-adventure third-person shooter developed by Rocksteady. Take a look at the latest trail...",
            "url": "https://www.youtube.com/watch?v=CbMqAqh53Ok",
            "urlToImage": "https://i.ytimg.com/vi/CbMqAqh53Ok/maxresdefault.jpg",
            "publishedAt": "2023-11-29T22:30:01Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Lethal Company Early Access Review - IGN",
            "description": "Lethal Company reviewed in Early Access by Gabriel Moss on PC.There’s nothing quite like a multiplayer survival-horror game that’s as unceasingly spooky as i...",
            "url": "https://www.youtube.com/watch?v=jK9rWsJcZAM",
            "urlToImage": "https://i.ytimg.com/vi/jK9rWsJcZAM/maxresdefault.jpg",
            "publishedAt": "2023-11-29T22:17:57Z",
            "content": null
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "Windows 11 tests energy saver mode for both laptops and desktop PCs - The Verge",
            "description": "Microsoft is rolling out a new energy saver mode to Windows 11 Insiders in the Canary channel that lets both desktop and laptop users conserve energy.",
            "url": "https://www.theverge.com/2023/11/29/23981581/windows-11-energy-saver-mode-laptops-pcs",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/JWliyYKjDSiXDgy9QzAujz95DDI=/0x0:1454x1153/1200x628/filters:focal(727x577:728x578)/cdn.vox-cdn.com/uploads/chorus_asset/file/25120931/windows_11_energy_saver.jpg",
            "publishedAt": "2023-11-29T21:50:27Z",
            "content": "Windows 11 tests energy saver mode for both laptops and desktop PCs\r\nWindows 11 tests energy saver mode for both laptops and desktop PCs\r\n / Microsoft is testing a new energy saver mode in Windows 11… [+1543 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kotaku"
            },
            "author": "Levi Winslow",
            "title": "PS Plus' December Lineup Wants You To Cozy Up For Christmas - Kotaku",
            "description": "Sony’s giving subscribers Lego 2K Drive, PowerWash Simulator, and Sable for free",
            "url": "https://kotaku.com/december-ps-plus-lego-2k-drive-powerwash-sim-sable-1851059251",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/29ce0d3ddad9ffcf050863cefc2ba02e.png",
            "publishedAt": "2023-11-29T21:15:00Z",
            "content": "Thanksgiving is over, which means Christmas will be here soon. To get you ready for the snowy season, Sonys December update offers a selection of lowkey games via PlayStation Plus.\r\nThe company annou… [+2165 chars]"
        },
        {
            "source": {
                "id": "polygon",
                "name": "Polygon"
            },
            "author": "Michael McWhertor",
            "title": "Overwatch 2’s season 8 Orisa Mythic skin draws ire from fans - Polygon",
            "description": "Blizzard’s new battle pass Mythic skin for Orisa is met with a negative response from Overwatch 2 players for being too close to an existing skin.",
            "url": "https://www.polygon.com/23981293/overwatch-2-mythic-skins-battle-pass-season-8-orisa",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/vmPW_HVkHGCzGFTHOe4_psrlEo8=/0x0:1920x1005/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25120441/orisa_grand_beast_mythic_skin.jpg",
            "publishedAt": "2023-11-29T20:41:59Z",
            "content": "Overwatch 2 developer Blizzard Entertainment teased the shooters next Mythic skin Grand Beast, for tank hero Orisa on Tuesday. That new skin, available as the ultimate battle pass reward for Overwatc… [+3152 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Fox Business",
            "title": "Law enforcement issue warnings after latest Apple iOS release - New York Post ",
            "description": "Law enforcement agencies across the U.S. are warning iPhone users about a feature released with the newest software update called NameDrop.",
            "url": "https://nypost.com/2023/11/29/tech/law-enforcement-issue-warnings-after-latest-apple-ios-release/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/11/ios-17-update-syndication-comp.jpg?quality=75&strip=all&1701267235&w=1024",
            "publishedAt": "2023-11-29T20:22:00Z",
            "content": "Law enforcement agencies across the U.S. are warning iPhone users about a feature released with the newest software update called NameDrop.\r\n“With iOS 17.1 and watchOS 10.1, you can use NameDrop to q… [+2197 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Videocardz.com"
            },
            "author": null,
            "title": "ASUS ROG Ally Z1 non-Extreme is now available for just $399 - VideoCardz.com",
            "description": "ROG Ally finally at a good $399 price, $299 for open-box BestBuy lowers the price for ROG Ally. ASUS ROG Ally is available in two versions, featuring either the AMD Ryzen Z1 Extreme or Ryzen Z1. The Extreme variant offers more power for the CPU and GPU, which…",
            "url": "https://videocardz.com/newz/asus-rog-ally-z1-non-extreme-is-now-available-for-just-399",
            "urlToImage": "https://cdn.videocardz.com/1/2023/11/ASUS-ROG-ALLY-Z1-PRICE-HERO-BANNER.jpg",
            "publishedAt": "2023-11-29T20:16:00Z",
            "content": "BestBuy lowers the price for ROG Ally.\r\nASUS ROG Ally is available in two versions, featuring either the AMD Ryzen Z1 Extreme or Ryzen Z1. The Extreme variant offers more power for the CPU and GPU, w… [+2000 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Video Games Chronicle"
            },
            "author": "Tom Ivan",
            "title": "Rockstar co-founder Dan Houser's new studio has revealed its first two projects | VGC - Video Games Chronicle",
            "description": "American Caper will debut as a graphic novel, while A Better Paradise is an audio fiction…",
            "url": "https://www.videogameschronicle.com/news/rockstar-co-founder-dan-housers-new-studio-has-revealed-its-first-two-projects/",
            "urlToImage": "https://www.videogameschronicle.com/files/2023/11/absurd-ventures-projects.jpg",
            "publishedAt": "2023-11-29T19:58:56Z",
            "content": "Absurd Ventures, the new transmedia company from Rockstar co-founder Dan Houser, has announced its debut projects.\r\nLaunching in 2024, its first two universes are American Caper, which will begin lif… [+1261 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rock Paper Shotgun"
            },
            "author": "Matt Jarvis",
            "title": "TimeSplitters studio Free Radical could close days before Christmas, Embracer exec reportedly confirms - Rock Paper Shotgun",
            "description": "The UK developers resurrected just a couple of years ago were said to be at risk under Embracer’s restructuring plans earlier this month.",
            "url": "https://www.rockpapershotgun.com/timesplitters-studio-free-radical-could-close-days-before-christmas-embracer-exec-reportedly-confirms",
            "urlToImage": "https://assetsio.reedpopcdn.com/timesplitters-future-perfect-cover-art.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
            "publishedAt": "2023-11-29T19:43:11Z",
            "content": "TimeSplitters studio Free Radical could be closed before Christmas, megacorp owner Embracer has reportedly told staff, as dozens of staff at the UK studio are said to be looking for new roles.\r\nTo se… [+2463 chars]"
        }
    ],
    "science": [
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Hubble's Big Reveal: Unearthing the Secrets of a Nearby Earth-Sized World - SciTechDaily",
            "description": "Hubble Telescope confirms the size of Earth-like exoplanet LTT 1445Ac, offering new insights into its composition and the potential for further atmospheric study. Lots of planets around neighboring stars are not seen directly. Instead, they are found when the…",
            "url": "https://scitechdaily.com/hubbles-big-reveal-unearthing-the-secrets-of-a-nearby-earth-sized-world/",
            "urlToImage": "https://scitechdaily.com/images/Exoplanet-LTT-1445Ac-scaled.jpg",
            "publishedAt": "2023-11-30T02:48:22Z",
            "content": "NASA’s Hubble Telescope accurately measured LTT 1445Ac, an Earth-sized exoplanet in a nearby triple star system. Initially discovered by TESS, this rocky planet is similar in size to Earth but much h… [+6048 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "FRANCE 24 English"
            },
            "author": "France 24",
            "title": "After 50 years, US to return to Moon on January 25 - FRANCE 24 English",
            "description": "More than 50 years after the last Apollo mission, the United States will try once again to land a craft on the Moon on January 25, said the head of what could be the first private company to successfully touch down on the lunar surface.",
            "url": "https://www.france24.com/en/live-news/20231130-after-50-years-us-to-return-to-moon-on-january-25",
            "urlToImage": "https://s.france24.com/media/display/f0acd2aa-8f29-11ee-a9c5-005056bf30b7/w:1280/p:16x9/Part-GTY-1244877208-1-1-1.jpg",
            "publishedAt": "2023-11-30T02:41:19Z",
            "content": "Washington (AFP) More than 50 years after the last Apollo mission, the United States will try once again to land a craft on the Moon on January 25, said the head of what could be the first private co… [+2457 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "As.com"
            },
            "author": "As.com, Greg Heilman",
            "title": "An exceptional solar system discovered: its planets have resonant orbits - AS USA",
            "description": "A six-planet solar system around the star HD110067, a near sun-like star roughly one hundred light years away, has stunned scientists by its rarity.",
            "url": "https://en.as.com/latest_news/an-exceptional-solar-system-discovered-its-planets-have-resonant-orbits-n/",
            "urlToImage": "https://img.asmedia.epimg.net/resizer/2mYEMAblt1X7X5oBNDT7QTb7VRQ=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/46NAOQPR7NFARCH4HMRWPNNEUU.jpg",
            "publishedAt": "2023-11-30T01:58:36Z",
            "content": "A solar system that has not undergone major changes since its formation is very rare, but there is a star a little more than one hundred light years from Earth that is just so. Orbited by six planets… [+3165 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "mlive.com"
            },
            "author": "Mark Torregrossa | mtorregr@mlive.com",
            "title": "Powerful geomagnetic storm now pegged as ‘likely’, get ready for northern lights - MLive.com",
            "description": "The Space Weather Prediction Center of NOAA now thinks a geomagnetic storm is likely heading straight toward Earth.",
            "url": "https://www.mlive.com/weather/2023/11/powerful-geomagnetic-storm-now-pegged-as-likely-get-ready-for-northern-lights.html",
            "urlToImage": "https://www.mlive.com/resizer/kYIkkgEWIqoeJPtbeAIO5p4SiqM=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/4AHZETO2KNBYVEIY5STE2XZPEU.png",
            "publishedAt": "2023-11-30T01:43:00Z",
            "content": "Three blasts of energy from the sun are likely heading right toward Earth. Space weather forecasters believe this geomagnetic storm will create northern lights.\r\nNOAAs Space Weather Prediction Center… [+2498 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jackie Wattles",
            "title": "Mary Cleave, the first woman to fly on NASA’s space shuttle after Challenger disaster, dies at 76 - CNN",
            "description": "Mary Cleave, the NASA astronaut who in 1989 became the first woman to fly on a space shuttle mission after the Challenger disaster, has died, the space agency announced.",
            "url": "https://www.cnn.com/2023/11/29/world/mary-cleave-nasa-astronaut-obit-scn/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231129191025-mary-l-cleave-nasa-astronaut.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-11-30T01:40:00Z",
            "content": "Mary Cleave, the NASA astronaut who in 1989 became the first woman to fly on a space shuttle mission after the Challenger disaster, has died at the age of 76, the space agency announced on Wednesday.… [+5090 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Bret Baier, Amy Munneke",
            "title": "US-China space race for moon mining heats up - Fox News",
            "description": "During the Apollo missions, scientists discovered rare earth elements in its lunar samples. China and the U.S. are now exploring space mining on the moon's surface.",
            "url": "https://www.foxnews.com/politics/us-china-space-race-moon-mining-heats-up",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/11/lunar.jpg",
            "publishedAt": "2023-11-30T00:14:37Z",
            "content": "As China, the U.S. and other countries work to expand mining and production of rare earth elements, the race to mine in space is growing more competitive.\r\n\"We see China keeping their foot on the acc… [+5391 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "IFLScience"
            },
            "author": "Tom Hale",
            "title": "Deep Within A Gold Mine, A Wealth Of \"Microbial Dark Matter\" Is Unearthed - IFLScience",
            "description": "By biomass, microbes under Earth's surface outweigh all life in the ocean.",
            "url": "https://www.iflscience.com/deep-within-a-gold-mine-a-wealth-of-microbial-dark-matter-is-unearthed-71786",
            "urlToImage": "https://assets.iflscience.com/assets/articleNo/71786/aImg/72403/mine-meta.jpg",
            "publishedAt": "2023-11-29T23:53:52Z",
            "content": "To illuminate the microbial dark matter that lives deep within Earth, scientists took a journey deep within a gold mine and returned with samples detailing hundreds of different microbial species. Th… [+2984 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Brett Tingley",
            "title": "ISS astronauts watch Russian cargo ship burn up in Earth's atmosphere (photos) - Space.com",
            "description": "The spacecraft had undocked from the space station only hours before.",
            "url": "https://www.space.com/international-space-station-astronaut-russian-cargo-ship-reentry-photos",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/s7DorkfDrr8Xu69Caxq7qf-1200-80.jpg",
            "publishedAt": "2023-11-29T23:36:20Z",
            "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "A rare weather phenomenon called Steve - CNN 10",
            "description": "Today on CNN10, we start with the news from China where hospitals are dealing with a spike in respiratory illnesses in children. We explain why New Zealand d...",
            "url": "https://www.youtube.com/watch?v=ds9dD5V_YFA",
            "urlToImage": "https://i.ytimg.com/vi/ds9dD5V_YFA/hqdefault.jpg",
            "publishedAt": "2023-11-29T23:27:59Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Josh Dinner",
            "title": "Watch Europe's new Ariane 6 rocket fire its engines in new timelapse video - Space.com",
            "description": "A timelapse video from Europe's new heavy-lift rocket speeds through a crucial engine test.",
            "url": "https://www.space.com/esa-ariane-6-hot-fire-test-timelapse",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/r9XyqWYDTQzbxbeeaEqdXV-1200-80.jpg",
            "publishedAt": "2023-11-29T21:59:56Z",
            "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
        },
        {
            "source": {
                "id": null,
                "name": "Universe Today"
            },
            "author": "Nancy Atkinson",
            "title": "There are Myterious Polygons Beneath the Surface of Mars - Universe Today",
            "description": "China’s Zhurong rover was equipped with a ground-penetrating radar system, allowing it to peer beneath Mars’s surface. Researchers have announced new results from the scans of Zhurong’s landing site in Utopia Planitia, saying they identified irregular polygon…",
            "url": "https://www.universetoday.com/164543/there-are-myterious-polygons-beneath-the-surface-of-mars/",
            "urlToImage": "https://www.universetoday.com/wp-content/uploads/2021/05/210519-mars3.jpg",
            "publishedAt": "2023-11-29T21:09:25Z",
            "content": "China’s Zhurong rover was equipped with a ground-penetrating radar system, allowing it to peer beneath Mars’s surface. Researchers have announced new results from the scans of Zhurongs landing site i… [+5528 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "The Universe: Dangerous DARK MATTER & Space Travel *3 Hour Marathon* - HISTORY",
            "description": "What is REALLY hiding in our deep dark solar system? See more in this three hour marathon from The Universe. #TheUniverseSubscribe for more from The Universe...",
            "url": "https://www.youtube.com/watch?v=5vjl6tdwmFA",
            "urlToImage": "https://i.ytimg.com/vi/5vjl6tdwmFA/maxresdefault.jpg",
            "publishedAt": "2023-11-29T21:00:02Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": null,
            "title": "Birdlike footprints from Triassic mystery animals precede earliest bird fossils by 60 million years - CNN",
            "description": "A new analysis of three-toed fossil footprints that date back more than 210 million years reveals that they were created by bipedal reptiles with feet like a bird’s.",
            "url": "https://www.cnn.com/2023/11/29/world/birdlike-footprints-triassic-mystery-fossils-scn/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/plos-one-trisauro-press-release.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-11-29T20:37:00Z",
            "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nThree-toed fossil footprints that date back more than … [+5431 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Isaac Schultz",
            "title": "Returning SpaceX Rockets Are Creating Bright 'Holes' in the Sky - Gizmodo",
            "description": "The artificial aurorae could be an issue for astronomers and communication systems.",
            "url": "https://gizmodo.com/spacex-rockets-atmosphere-punch-holes-bright-aurorae-1851058103",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/71b0d9914467a4fafa1dc66847b212f6.jpg",
            "publishedAt": "2023-11-29T20:05:00Z",
            "content": "In mid-July, viewers hoping to catch a glimpse of a SpaceX rocket launch were stunned to see it followed by a bright aurora-like phenomenon over Arizona. The rocket had formed a hole in the upper atm… [+2707 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Elizabeth Howell",
            "title": "Artemis 2 moon astronauts autograph their own rocket 1 year before launch - Space.com",
            "description": "The historic round-the-moon mission is slated to fly in late 2024.",
            "url": "https://www.space.com/artemis-2-moon-astronaut-autograph-nasa-space-launch-system-1-year-launch",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/YqcMpBWiUuPQNAZX6wL7X-1200-80.jpg",
            "publishedAt": "2023-11-29T19:59:00Z",
            "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
        },
        {
            "source": {
                "id": null,
                "name": "Phys.Org"
            },
            "author": "Science X",
            "title": "New astrophysics model sheds light on additional source of long gamma-ray bursts - Phys.org",
            "description": "Cutting-edge computer simulations combined with theoretical calculations are helping astronomers better understand the origin of some of the universe's most energetic and mysterious light shows—gamma-ray bursts, or GRBs. The new unified model confirms that so…",
            "url": "https://phys.org/news/2023-11-astrophysics-additional-source-gamma-ray.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/new-astrophysics-model.jpg",
            "publishedAt": "2023-11-29T19:43:49Z",
            "content": "Cutting-edge computer simulations combined with theoretical calculations are helping astronomers better understand the origin of some of the universe's most energetic and mysterious light showsgamma-… [+5656 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Science.org"
            },
            "author": "Science",
            "title": "Octopus-inspired sensorized soft arm for environmental interaction - Science",
            "description": null,
            "url": "https://www.science.org/doi/10.1126/scirobotics.adh7852",
            "urlToImage": null,
            "publishedAt": "2023-11-29T19:10:46Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "indy100"
            },
            "author": "Harriet Brewis",
            "title": "Scientists discover giant missing blob of water in the middle of the Atlantic - indy100",
            "description": "To the uninitiated, there isn’t much to water. Sure, the world’s oceans are filled with monsters, marvels and mysteries but, otherwise, they’re just vast, singular expanses of liquid. Right?Wrong.Far from being uniform everywhere, ocean water is a patchwork o…",
            "url": "https://www.indy100.com/science-tech/scientist-discover-atlantic-water-mass-2666392089",
            "urlToImage": "https://www.indy100.com/media-library/what-if-the-oceans-caught-fire.jpg?id=50535243&width=1200&height=600&coordinates=0%2C104%2C0%2C105",
            "publishedAt": "2023-11-29T17:59:22Z",
            "content": "To the uninitiated, there isnt much to water. \r\nSure, the worlds oceans are filled with monsters, marvels and mysteries but, otherwise, theyre just vast, singular expanses of liquid. Right?\r\nWrong.\r\n… [+3170 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Live Science"
            },
            "author": "Nicoletta Lanese",
            "title": "188 new types of CRISPR revealed by algorithm - Livescience.com",
            "description": "Researchers used an algorithm to scour databases of bacterial genomes for never-before-seen CRISPR systems.",
            "url": "https://www.livescience.com/health/genetics/188-new-types-of-crispr-revealed-by-algorithm",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/3h2PgfG5GU53oAaqn7YJHg-1200-80.jpg",
            "publishedAt": "2023-11-29T17:55:12Z",
            "content": "Scientists have unearthed 188 previously unknown types of CRISPR\r\n systems buried in the genomes of simple microorganisms.\r\nBest known as a powerful gene-editing tool, CRISPR actually comes from an i… [+3570 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Phys.Org"
            },
            "author": "Melanie Nyfeler",
            "title": "Study shows that inoculating soil with mycorrhizal fungi can increase plant yield by by up to 40% - Phys.org",
            "description": "Farmland often harbors a multitude of pathogens which attack plants and reduce yields. A Swiss research team has now shown that inoculating the soil with mycorrhizal fungi can help maintain or even improve yields without using additional fertilizers or pestic…",
            "url": "https://phys.org/news/2023-11-inoculating-soil-mycorrhizal-fungi-yield.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2022/field.jpg",
            "publishedAt": "2023-11-29T17:52:39Z",
            "content": "Farmland often harbors a multitude of pathogens which attack plants and reduce yields. A Swiss research team has now shown that inoculating the soil with mycorrhizal fungi can help maintain or even i… [+3927 chars]"
        }
    ],
    "health": [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Ben Blanchard, Andrew Silver",
            "title": "Taiwan urges elderly, young to avoid China visits due to respiratory illnesses - Reuters",
            "description": "Taiwan's health ministry on Thursday urged the elderly, very young and those with poor immunity to avoid travel to China due to the recent increase in respiratory illnesses there, a move some experts said was ineffective to manage public health risks.",
            "url": "https://www.reuters.com/world/asia-pacific/taiwan-urges-elderly-young-avoid-china-visits-due-respiratory-illnesses-2023-11-30/",
            "urlToImage": "https://www.reuters.com/resizer/DcLX87_dBLUFVfpCpTaoQMgYiYM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/O7UWNWGTAFPU3M2L4XGSZ3V74U.jpg",
            "publishedAt": "2023-11-30T04:17:54Z",
            "content": "TAIPEI/SHANGHAI, Nov 30 (Reuters) - Taiwan's health ministry on Thursday urged the elderly, very young and those with poor immunity to avoid travel to China due to the recent increase in respiratory … [+2409 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "World Health Organization"
            },
            "author": null,
            "title": "World AIDS Day 2023 – events in Geneva and around the world - World Health Organization",
            "description": "World AIDS Day 2023 events in Geneva and around the world under the theme ‘Let communities lead’.",
            "url": "https://www.who.int/news-room/events/detail/2023/12/01/default-calendar/world-aids-day-2023-events-in-geneva-and-around-the-world",
            "urlToImage": "https://cdn.who.int/media/images/default-source/who-campaigns/world-aids-day-2023/aids-day-2023-banner03.tmb-1200v.png?sfvrsn=30ed912d_15",
            "publishedAt": "2023-11-30T04:10:01Z",
            "content": "On 1st December, WHO, together with communities and partners will commemorate World AIDS Day 2023, under the theme “Let communities lead”.\r\nCommunities living with, and affected by, HIV, networks of … [+2501 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "nejm.org"
            },
            "author": "nejm.org",
            "title": "Case Challenge — A 68-Year-Old Woman with Abnormal Movements and Confusion — NEJM - nejm.org",
            "description": null,
            "url": "https://www.nejm.org/doi/story/10.1056/feature.2023.11.27.100101",
            "urlToImage": null,
            "publishedAt": "2023-11-30T00:44:25Z",
            "content": null
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "MARIA CHENG AP medical writer",
            "title": "South African company to start making vaginal rings that protect against HIV - ABC News",
            "description": "A South African company will make vaginal rings that protect against HIV, which AIDS experts say should eventually make them cheaper and more readily available",
            "url": "https://abcnews.go.com/Health/wireStory/african-company-start-making-vaginal-rings-protect-hiv-105258407",
            "urlToImage": "https://i.abcnewsfe.com/a/cbd3f263-0fb1-48e5-b6c9-a76d72cb761f/wirestory_3e9a583a1d0b5f7863a9795ec4d2ff4f_16x9.jpg?w=992",
            "publishedAt": "2023-11-30T00:11:12Z",
            "content": "A South African company will make vaginal rings that protect against HIV, which AIDS experts say should eventually make them cheaper and more readily available.\r\nThe Population Council announced Thur… [+2044 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nature.com"
            },
            "author": null,
            "title": "World's biggest set of human genome sequences opens to scientists - Nature.com",
            "description": "The whole genomes of 500,000 people in the UK Biobank will help researchers to probe our genetic code for links to disease.",
            "url": "https://www.nature.com/articles/d41586-023-03763-3",
            "urlToImage": "https://media.nature.com/lw1024/magazine-assets/d41586-023-03763-3/d41586-023-03763-3_26373316.jpg",
            "publishedAt": "2023-11-30T00:02:03Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Verywellhealth.com"
            },
            "author": "https://www.facebook.com/verywell",
            "title": "COVID-19 Incubation Period: Averages for Alpha to Omicron - Verywell Health",
            "description": "The COVID-19 incubation period has shortened as new variants have emerged. This article provides estimates for each variant.",
            "url": "https://www.verywellhealth.com/covid-incubation-period-8405031",
            "urlToImage": "https://www.verywellhealth.com/thmb/y49kda15RmVhED6fWOC8688gKDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/covid-GettyImages-1312993637-2d8f3d3231154944bf2ff8d4fd82a6e5.jpg",
            "publishedAt": "2023-11-29T23:50:28Z",
            "content": "Strains of the SARS-CoV-2 virus that causes COVID-19 circulating in 2023 typically took about three days from exposure to showing symptoms. This incubation period is shorter than previous strains of … [+9998 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Adriana Diaz",
            "title": "What causes common headaches and migraines? Experts think they finally know - New York Post ",
            "description": "Tension headaches and migraines are the most common types of head pains, yet the exact source of those conditions has alluded health professionals — until now.",
            "url": "https://nypost.com/2023/11/29/lifestyle/what-causes-headaches-and-migraines-experts-think-they-finally-know/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/11/headache-causes.gif?w=1024",
            "publishedAt": "2023-11-29T23:39:00Z",
            "content": "Tension headaches and migraines are the most common types of head pains, yet the exact source of those conditions has alluded experts until now. \r\nA research team in Germany studied magnetic resonanc… [+1999 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Grace Eliza Goodwin, Kelsey Vlamis",
            "title": "Killer whales rub bodies against icebergs, may be exfoliating: video - Business Insider",
            "description": "National Geographic captured the first known footage of killer whales rubbing up against icebergs, potentially to exfoliate their skin.",
            "url": "https://www.businessinsider.com/killer-whales-rub-against-icebergs-exfoliating-molting-migration-video-2023-11",
            "urlToImage": "https://i.insider.com/65650a58c58b6f84123aaf2a?width=1200&format=jpeg",
            "publishedAt": "2023-11-29T23:03:00Z",
            "content": "Orcas living in the freezing waters of Antarctica have been captured in footage rubbing up against icebergs in what could be an innovative skincare technique.\r\nDrone footage taken by National Geograp… [+3348 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WRAL.com"
            },
            "author": "Mark Bergin, Rick Armstrong, Shelle Jackson",
            "title": "Wake County grandmother turned away by CVS when she tried to get her grandkids COVID vaccine - WRAL News",
            "description": "Children with Medicaid can receive the 2023-24 COVID vaccine for free at any local health department or providers enrolled with the Vaccines for Children Program. The NCDHHS said pharmacies are not currently providers in the program.",
            "url": "https://www.wral.com/story/coronavirus/story/wake-county-grandmother-turned-away-by-cvs-when-she-tried-to-get-her-grandkids-covid-vaccine/21173371/",
            "urlToImage": "https://wwwcache.wral.com/asset/lifestyles/healthteam/2023/11/29/21173483/Twana_Bannister-DMID1-613npusoi-640x480.jpg",
            "publishedAt": "2023-11-29T23:01:00Z",
            "content": "A Wake County grandmother tried to get the latest COVID vaccine for her grandkids, but she couldnt believe it when she was told she had to pay hundreds of dollars for them.\r\nMedicaid paid for Twana B… [+1737 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Neurosciencenews.com"
            },
            "author": "Neuroscience News",
            "title": "Heartbeat's Influence on Brain Activity - Neuroscience News",
            "description": null,
            "url": "https://neurosciencenews.com/heartbeat-brain-activity-25282/",
            "urlToImage": null,
            "publishedAt": "2023-11-29T22:16:17Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Alexandra Klausner",
            "title": "A big meal with alcohol can make your hangover worse, experts say - New York Post ",
            "description": "If you think a huge dinner will offset your headache from the bottle of wine you downed by yourself — think again.",
            "url": "https://nypost.com/2023/11/29/lifestyle/a-big-meal-with-alcohol-can-make-your-hangover-worse-experts-say/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/11/newspress-collage-7c8z8paes-1701294801991.jpg?quality=75&strip=all&1701277487&w=1024",
            "publishedAt": "2023-11-29T22:05:00Z",
            "content": "If you think your extra helping of holiday dinner will offset your headache from the bottle of wine you downed by yourself think again.\r\nExperts explained that even though eating a lot of food while … [+4005 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "nejm.org"
            },
            "author": "nejm.org",
            "title": "Digital Technology for Diabetes | NEJM - nejm.org",
            "description": null,
            "url": "https://www.nejm.org/doi/full/10.1056/NEJMra2215899",
            "urlToImage": null,
            "publishedAt": "2023-11-29T22:02:15Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "nejm.org"
            },
            "author": "nejm.org",
            "title": "Intravenous Levothyroxine for Unstable Brain-Dead Heart Donors | NEJM - nejm.org",
            "description": null,
            "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa2305969",
            "urlToImage": null,
            "publishedAt": "2023-11-29T22:02:01Z",
            "content": null
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Julia Pugachevsky",
            "title": "ODD's broad definition, symptoms spark psychologists' skepticism - Business Insider",
            "description": "Oppositional defiant disorder's broad definition and symptoms in children have some psychologists concerned. ADHD or autism may be the issue, not ODD.",
            "url": "https://www.businessinsider.com/oppositional-defiant-disorder-odd-definition-symptoms-children-adhd-autism-skepticism-2023-11",
            "urlToImage": "https://i.insider.com/656656e5fe5bc6545ebd1c7d?width=1200&format=jpeg",
            "publishedAt": "2023-11-29T21:59:00Z",
            "content": "While most children throw tantrums or defy their parents at some point, there's an explanation for when it happens all the time: oppositional defiant disorder.\r\nODD, which can only be diagnosed in ch… [+3458 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Umn.edu"
            },
            "author": null,
            "title": "Denmark reports Mycoplasma pneumonia epidemic | CIDRAP - University of Minnesota Twin Cities",
            "description": "Before COVID, Denmark experienced Mycoplasma outbreaks every 3 to 7 years.",
            "url": "https://www.cidrap.umn.edu/pneumonia/denmark-reports-mycoplasma-pneumonia-epidemic",
            "urlToImage": "https://www.cidrap.umn.edu/themes/custom/cidrap_theme/images/cidrap-og-image.jpg",
            "publishedAt": "2023-11-29T21:36:00Z",
            "content": null
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Fox News Staff",
            "title": "10 healthy living habits, foods that raise cancer risk, and a nurse's triumph over heart disease - Fox News",
            "description": "The Fox News Health Newsletter brings you trending and important stories about health warnings, drug shortages, mental health issues and more in this weekly recap.",
            "url": "https://www.foxnews.com/health/10-healthy-living-habits-foods-raise-cancer-risk-nurse-triumph-heart-disease",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/11/healthy-living.jpg",
            "publishedAt": "2023-11-29T21:23:58Z",
            "content": "HEALTHY HABITS Boost your well-being with these 10 practices, which take less than 10 minutes each per day.Continue reading\r\nHIDDEN BENEFIT? Flu vaccination could reduce the risk of heart attacks and… [+1318 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Health.com"
            },
            "author": "https://www.facebook.com/Health/",
            "title": "Current Vitamin D Recommendations May Not Be Heart - Health.com",
            "description": "New research found that many people need more than the recommended dosage of vitamin D to achieve optimal blood levels.﻿﻿ Vitamin D can positively contribute to multiple areas of health, including the cardiovascular system.",
            "url": "https://www.health.com/vitamin-d-recommendations-heart-health-8403638",
            "urlToImage": "https://www.health.com/thmb/GAN1t0d68gCOkEhqfiK6Kbil2fI=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1705478083-f8fedfce5b3f4e1092d3588a0bb69ca3.jpg",
            "publishedAt": "2023-11-29T21:06:41Z",
            "content": "Current vitamin D dosage recommendations may not be high enough, according to new research.\r\nTwo new studies from Intermountain Health, presented at the American Heart Associations 2023 Scientific Se… [+5920 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Neurosciencenews.com"
            },
            "author": "Neuroscience News",
            "title": "Innovative Fiber to Tackle Alzheimer's Developed - Neuroscience News",
            "description": "With a one-year deadline, this ambitious project could revolutionize our approach to understanding and treating Alzheimer’s.",
            "url": "https://neurosciencenews.com/alzheimers-fiber-neurotech-25279/",
            "urlToImage": "https://neurosciencenews.com/files/2023/11/alzheimers-fiber-neurosicnce.jpg",
            "publishedAt": "2023-11-29T21:02:37Z",
            "content": "Summary: A collaborative team is developing a neural fiber to combat Alzheimers disease. This high-priority NIH-funded project aims to create a minimally invasive fiber, capable of electrical stimula… [+6441 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "Giantfreakinrobot.com"
            },
            "author": "Charlene Badasie",
            "title": "Cancer Vaccine Coming In Less Than Ten Years - Giant Freakin Robot",
            "description": "A biotech company is working on a cancer vaccine that could be a game-changer in the medical industry. Here's when it will become available.",
            "url": "https://www.giantfreakinrobot.com/sci/cancer-vaccine-coming.html",
            "urlToImage": "https://www.giantfreakinrobot.com/wp-content/uploads/2023/11/vaccine.jpg",
            "publishedAt": "2023-11-29T20:17:28Z",
            "content": null
        }
    ],
    "sports": [
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "NHL Highlights | Capitals vs. Kings - November 29, 2023 - SPORTSNET",
            "description": "A disqualified goal by Anze Kopitar in the third prevented an attempt to tie up the game as the Washington Capitals eked out a 2-1 win against the Los Angele...",
            "url": "https://www.youtube.com/watch?v=k4h9WBSlcms",
            "urlToImage": "https://i.ytimg.com/vi/k4h9WBSlcms/maxresdefault.jpg",
            "publishedAt": "2023-11-30T06:11:26Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Arkansas fans storm the court after upsetting Duke 😳 | ESPN College Basketball - ESPN",
            "description": "Watch as fans storm the court in Arkansas after the Razorbacks' huge upset over No. 7 Duke.✔️Subscribe to ESPN+ http://espnplus.com/youtube✔️ Get the ESPN Ap...",
            "url": "https://www.youtube.com/watch?v=EwfO7gqiAkU",
            "urlToImage": "https://i.ytimg.com/vi/EwfO7gqiAkU/maxresdefault.jpg",
            "publishedAt": "2023-11-30T04:59:05Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Nbcsportsbayarea.com"
            },
            "author": "Angelina Martin",
            "title": "Report: GP2 sidelined ‘indefinitely' for Warriors with torn calf - NBC Sports Bay Area",
            "description": "Gary Payton II reportedly will miss an extended amount of time for the Warriors after suffering a significant calf injury against the Sacramento Kings on Tuesday night.",
            "url": "http://www.nbcsportsbayarea.com/nba/golden-state-warriors/nba-rumors-gary-payton-ii-calf-injury/1676815/",
            "urlToImage": "https://media.nbcsportsbayarea.com/2023/05/Gary-Payton-II-USA-17267894-e1701303174562.jpg?quality=85&strip=all&resize=1200%2C675",
            "publishedAt": "2023-11-30T04:48:38Z",
            "content": "Warriors guard/forward Gary Payton II reportedly will miss an extended amount of time after suffering a significant calf injury during Tuesday night's loss to the Sacramento Kings.\r\nPayton suffered a… [+1033 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "ROCKETS at NUGGETS | FULL GAME HIGHLIGHTS | November 29, 2023 - NBA",
            "description": "The Denver Nuggets defeated the Houston Rockets, 134-124. Nikola Jokic recorded 32 points, 10 rebounds and 15 assists for the Nuggets, the 112th triple-doubl...",
            "url": "https://www.youtube.com/watch?v=7jgm9RvSnZk",
            "urlToImage": "https://i.ytimg.com/vi/7jgm9RvSnZk/maxresdefault.jpg",
            "publishedAt": "2023-11-30T04:26:47Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Zion Williamson Flexes His Muscle For 38 PTS! | November 29, 2023 - NBA",
            "description": null,
            "url": "https://www.youtube.com/watch?v=Bf7Sxob0rd0",
            "urlToImage": null,
            "publishedAt": "2023-11-30T03:59:12Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "JAZZ at GRIZZLIES | FULL GAME HIGHLIGHTS | November 29, 2023 - NBA",
            "description": "The Memphis Grizzlies defeated the Utah Jazz, 105-91. Jaren Jackson Jr. recorded 20 points, 6 rebounds and 6 blocks for the Grizzlies, while David Roddy adde...",
            "url": "https://www.youtube.com/watch?v=GD1QLJNbKdg",
            "urlToImage": "https://i.ytimg.com/vi/GD1QLJNbKdg/maxresdefault.jpg",
            "publishedAt": "2023-11-30T03:26:18Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Charean Williams",
            "title": "James Bradberry tactful in his reaction to Deebo Samuel calling him \"trash\" - NBC Sports",
            "description": "“I wish he would have used a better word to describe my play, but it is what it is,\" the Eagles corner said.",
            "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/james-bradberry-tactful-about-deebo-samuel-calling-him-trash",
            "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/8dd0ef3/2147483647/strip/true/crop/5788x3256+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Ff8%2Fbd%2F70e92200447cb6b8f28b3d3419ea%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1817008033",
            "publishedAt": "2023-11-30T03:12:06Z",
            "content": "49ers receiver Deebo Samuel is never afraid to tell it like he sees it. He called Eagles cornerback James Bradberry trash in the days after the NFC Championship Game, and earlier this week, Samuel do… [+1888 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Tennessee vs. North Carolina Condensed Game | 2023-24 ACC Men’s Basketball - ACC Digital Network",
            "description": "North Carolina withstood a furious Tennessee comeback effort to pick up a big 100-92 home victory in the ACC/SEC Challenge. The Tar Heels led by as much as 2...",
            "url": "https://www.youtube.com/watch?v=ku-nCYGMmM0",
            "urlToImage": "https://i.ytimg.com/vi/ku-nCYGMmM0/maxresdefault.jpg",
            "publishedAt": "2023-11-30T03:11:19Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Streaking The Lawn"
            },
            "author": "Zach Carey",
            "title": "Five takeaways from UVA basketball’s win over #14 Texas A&M - Streaking The Lawn",
            "description": "What we learned from a massive, weirdly easy win for the Wahoos.",
            "url": "https://www.streakingthelawn.com/2023/11/29/23982015/virginia-cavaliers-uva-basketball-virginia-basketball-texas-a-m-elijah-gertrude-dante-harris-dunn",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/lbRCfoHy72gXhzE_KjNlQmhwe8Q=/0x0:3885x2034/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25121677/1811958702.jpg",
            "publishedAt": "2023-11-30T03:10:04Z",
            "content": "The Virginia Cavaliers handled the Texas A&amp;M Aggies in surprisingly straightforward fashion on Wednesday night, beating Buzz Williams team 59-47 and improving to 6-1 on the young season. \r\nWith U… [+5522 chars]"
        },
        {
            "source": {
                "id": "nhl-news",
                "name": "NHL News"
            },
            "author": null,
            "title": "NHL takes part in White House Holiday Ice Rink opening - NHL.com",
            "description": "Commissioner Bettman, youth players from Learn to Play program attend ceremony on South Lawn",
            "url": "https://www.nhl.com/news/nhl-takes-part-in-white-house-holiday-rink-opening",
            "urlToImage": "https://media.d3.nhle.com/image/private/t_ratio16_9-size50/v1701307652/prd/udwo5rpxrmzudcvjhckf.jpg",
            "publishedAt": "2023-11-30T03:06:58Z",
            "content": "In addition to the first lady, U.S. Secretary of the Interior Deb Haaland was among the guests at the ceremony, which was emceed by 1988 Calgary Olympics gold medalist and 1988 world champion figure … [+2657 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "WIZARDS at MAGIC | FULL GAME HIGHLIGHTS | November 29, 2023 - NBA",
            "description": null,
            "url": "https://www.youtube.com/watch?v=RAqzLaFYpfU",
            "urlToImage": null,
            "publishedAt": "2023-11-30T02:35:29Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
            "source": {
                "id": null,
                "name": "Silver Screen and Roll "
            },
            "author": "Edwin Garcia",
            "title": "Lakers vs. Pistons Final Score: D’Angelo Russell dominates in road win - Silver Screen and Roll ",
            "description": "After an ugly defeat in Philadelphia, the Lakers bounced back on Wednesday versus the Pistons.",
            "url": "https://www.silverscreenandroll.com/2023/11/29/23981918/lakers-vs-pistons-final-score-recap-dangelo-russell-lebron-james-anthony-davis",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/qxKZ3SzWh4AE52bpz7TgNWH2OMU=/0x0:4500x2356/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25121555/1817702240.jpg",
            "publishedAt": "2023-11-30T02:26:32Z",
            "content": "The Lakers took care of business on Wednesday, bouncing back after an ugly road loss against the Sixers by defeating the Detroit Pistons 133-107 on the road. \r\nDAngelo Russell had his best game of th… [+2328 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Charean Williams",
            "title": "Zack Moss ready to carry the load again with Jonathan Taylor out - NBC Sports",
            "description": "Zack Moss has made five starts in place of Jonathan Taylor already this season.",
            "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/zack-moss-ready-to-carry-the-load-again-with-jonathan-taylor-out",
            "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/1bc0206/2147483647/strip/true/crop/5946x3345+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F91%2Fea%2F5d03679149308d19461b96c09434%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D21827687",
            "publishedAt": "2023-11-30T02:24:09Z",
            "content": "Zack Moss has made five starts in place of Jonathan Taylor already this season. He will make a few more until Taylor returns from thumb surgery.\r\nTaylor is expected to miss 2-3 weeks.\r\nMoss already h… [+1111 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Georgia Bulldogs vs. Alabama Crimson Tide | SEC Championship Game Preview 🏆 | College Football - 247Sports",
            "description": "Championship weekend is upon us as the Georgia Bulldogs attempt to continue their 29-game winning streak. Their last loss came in the 2021 SEC Championship g...",
            "url": "https://www.youtube.com/watch?v=3EhDh72mp-g",
            "urlToImage": "https://i.ytimg.com/vi/3EhDh72mp-g/maxresdefault.jpg",
            "publishedAt": "2023-11-30T02:00:01Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "OregonLive"
            },
            "author": "Bill Oram | The Oregonian/OregonLive",
            "title": "Bill Oram: It was fight or flight for new Beavers coach Trent Bray, whose sense of loyalty kept him at Oregon - OregonLive",
            "description": "“There was an obligation,” Bray told me on Wednesday. “To these players, to this university, to a place I care deeply about.”",
            "url": "https://www.oregonlive.com/beavers/2023/11/bill-oram-it-was-fight-or-flight-for-new-beavers-coach-trent-bray-whose-sense-of-loyalty-kept-him-at-oregon-state.html",
            "urlToImage": "https://www.oregonlive.com/resizer/UBhFATg8kB6Ac9GaXXUv4WSQ_hU=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/FRFMBEIPP5HRDLPWDC56OBFOAQ.JPG",
            "publishedAt": "2023-11-30T01:54:00Z",
            "content": "All right, Brayzy baby, jets on the tarmac, engines are a-hummin and theres a window seat with your name on it. Destination: East Lansing, Michigan. Youll look great in green.\r\nYou might imagine Jona… [+5307 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SwimSwam"
            },
            "author": "Sean Griffin",
            "title": "2023 Minnesota Invitational - Day 1 Finals Live Recap - SwimSwam",
            "description": "The 2023 Minnesota Invitational kicks off tonight in Minneapolis, featuring just the 200 medley and 800 freestyle relays.",
            "url": "https://swimswam.com/2023-minnesota-invitational-day-1-finals-live-recap/",
            "urlToImage": "https://swimswam.com/wp-content/uploads/2023/03/Destin-Lasco-By-Jack-Spitser-A53I2385-scaled.jpg?1701326870",
            "publishedAt": "2023-11-30T01:43:42Z",
            "content": "2023 Minnesota Invitational \r\n<ul><li>November 29-December 2, 2023</li><li>Jean K. Freeman Aquatic Center, Minneapolis, Minnesota</li><li>Short Course Yards (25 yards)</li><li>Start Times\r\n<ul><li>Pr… [+5781 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Detroit News"
            },
            "author": "Kim Kozlowski",
            "title": "UM's Ono weighs in on Harbaugh, addresses Middle East tension on campus - Detroit News",
            "description": "During a visit to Detroit Economic Club, President Santa Ono was asked about the sign stealing controversy swirling about football coach Jim Harbaugh.",
            "url": "https://www.detroitnews.com/story/news/local/michigan/2023/11/29/university-of-michigan-president-santa-ono-on-footbal-coach-jim-harbaugh-i-trust-the-guy/71691766007/",
            "urlToImage": "https://www.detroitnews.com/gcdn/authoring/authoring-images/2023/11/29/PDTN/71743468007-1129-kk-santa-ono-ecomonic-club-01.jpg?crop=5840,3285,x0,y0&width=3200&height=1800&format=pjpg&auto=webp",
            "publishedAt": "2023-11-30T01:38:23Z",
            "content": "University of Michigan President Santa Ono on Wednesday didn't directly address how he feels about the university's reputation since the sign-stealing scandal involving the school's football team, bu… [+5943 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Pete Thamel",
            "title": "Clemson cornerback Nate Wiggins leaving early for NFL draft - ESPN",
            "description": "Tigers cornerback Nate Wiggins will leave school early and declare for the 2024 NFL draft, he told ESPN.",
            "url": "https://www.espn.com/nfl/story/_/id/39008521/clemson-cornerback-nate-wiggins-leaving-early-nfl-draft",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1023%2Fr1242228_1296x729_16%2D9.jpg",
            "publishedAt": "2023-11-30T01:28:00Z",
            "content": "Clemson cornerback Nate Wiggins will leave school early and declare for the 2024 NFL draft, he told ESPN in a phone interview Wednesday.\r\nWiggins projects as one of the draft's top cornerbacks, as ES… [+2669 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBC Chicago"
            },
            "author": null,
            "title": "What happened with Corey Perry and the Chicago Blackhawks? What we know - NBC Chicago",
            "description": "News that the Chicago Blackhawks would ultimately be terminating the contract of forward Corey Perry, following what the team’s general manager described as a “disturbing” incident, sent shockwaves through the hockey world Tuesday.",
            "url": "http://www.nbcchicago.com/news/sports/nhl/chicago-blackhawks/what-happened-with-corey-perry-and-the-chicago-blackhawks-what-we-know/3290311/",
            "urlToImage": "https://media.nbcchicago.com/2023/11/GettyImages-1742750118.jpg?quality=85&strip=all&resize=1200%2C675",
            "publishedAt": "2023-11-30T01:07:44Z",
            "content": "The Chicago Blackhawks have officially terminated the contract of forward Corey Perry, following what the team's general manager described as a \"disturbing\" incident, which sent shockwaves through th… [+5493 chars]"
        }
    ],
    "entertainment": [
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "Suntimes.com"
            },
            "author": "Georgia Nicols",
            "title": "Horoscope for Thursday, Nov, 30, 2023 - Chicago Sun-Times",
            "description": null,
            "url": "https://chicago.suntimes.com/2023/11/30/23981710/horoscopes-today-thursday-nov-30-2023",
            "urlToImage": "https://cst.brightspotcdn.com/dims4/default/774563e/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F7IoDv3-dJvi-DKHuw2tYJCTWbio%3D%2F0x0%3A870x630%2F870x630%2Ffilters%3Afocal%28435x315%3A436x316%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F25121138%2FGeorgia_mug.jpeg",
            "publishedAt": "2023-11-30T06:02:06Z",
            "content": "Moon Alert\r\nThere are no restrictions to shopping or important decisions. The moon is in Cancer.\r\nAries (March 21-April 19)\r\nYou might entertain unusual friends or groups, or a spontaneous gathering … [+3921 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Gavin Newsom Debates MyPillow Mike, Trump's Insurrection Depression & Bye-Bye George Santos? - Jimmy Kimmel Live",
            "description": "We woke up today to Spotify’s year-end wrap-up, Taylor Swift took the crown as the top-streamed artist, Jimmy wishes there was accounting like this for every...",
            "url": "https://www.youtube.com/watch?v=vME_Jf-9VjY",
            "urlToImage": "https://i.ytimg.com/vi/vME_Jf-9VjY/maxresdefault.jpg",
            "publishedAt": "2023-11-30T04:45:02Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "HuffPost"
            },
            "author": "Jazmin Tolliver",
            "title": "Cher Admits How She Really Feels About Getting Older - HuffPost",
            "description": "The pop star, 77, had a hilarious response when asked her thoughts on aging amid the 25th anniversary of her hit song \"Believe.\"",
            "url": "https://www.huffpost.com/entry/cher-how-she-feels-about-getting-older_n_6567a382e4b066e398b65357",
            "urlToImage": "https://img.huffingtonpost.com/asset/6567b457230000e271ea6a51.jpeg?cache=sjvUcaMemj&ops=1200_630",
            "publishedAt": "2023-11-30T03:24:56Z",
            "content": "Cher celebrated her 77th birthday in May.\r\nCher has revealed the age shed go back to if she could turn back time, and its probably not what you were expecting. \r\nIn a new interview with the Today sho… [+4493 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Koffee With Karan 8: Kajol And Rani Mukerji Reveal Why They Weren't Friends While Making Kuch Kuch Hota Hai - NDTV Movies",
            "description": "\"Did you feel that there was a distance when you worked with her,\" Karan Johar asked Rani",
            "url": "https://www.ndtv.com/entertainment/koffee-with-karan-8-kajol-and-rani-mukerji-reveal-why-they-werent-friends-while-making-kuch-kuch-hota-hai-4619676",
            "urlToImage": "https://c.ndtvimg.com/2023-11/oa1k6bho_rani_625x300_30_November_23.jpg",
            "publishedAt": "2023-11-30T03:24:04Z",
            "content": "Rani Mukjeri and Kajol pictured together. (courtesy: kajol)\r\nNew Delhi: Karan Johar's new guests were Kajol and Rani Mukerji on his chat show Koffee With Karan 8. Rani and Kajol, who happen to be cou… [+1883 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Kirsten Chuba",
            "title": "Wyatt Russell Teases ‘Thunderbolts’: “It’s Not a Straightforward Marvel Movie as You’ve Seen in the Past” - Hollywood Reporter",
            "description": "The actor sat down with father Kurt Russell for a conversation about their family and the new Apple TV+ series 'Monarch: Legacy of Monsters.'",
            "url": "https://www.hollywoodreporter.com/movies/movie-news/wyatt-russell-thunderbolts-marvel-movie-kurt-russell-1235699307/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/11/Wyatt-Russell-getty-H-2023.jpg?w=1024",
            "publishedAt": "2023-11-30T03:05:06Z",
            "content": "Wyatt and Kurt Russell sat down for a wide-ranging convo at 92NY on Wednesday, where the father and son duo dove into their collaboration on the Apple TV+ series Monarch: Legacy of Monsters. \r\nFirst,… [+4102 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "Erik Beaston",
            "title": "AEW Dynamite Results: Winners, Live Grades, Reaction and Highlights From Nov. 29 - Bleacher Report",
            "description": "The Continental Classic continued Wednesday night on AEW Dynamite, with former world champion Jon Moxley, the red-hot Swerve Strickland, and former top…",
            "url": "https://bleacherreport.com/articles/10099141-aew-dynamite-results-winners-live-grades-reaction-and-highlights-from-nov-29",
            "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1701291265/i6zlzv8swcs4z096nrll.jpg",
            "publishedAt": "2023-11-30T03:04:44Z",
            "content": "This was another steady builder for AEW.\r\nThe Continental Classic action was all mostly good, if not great in regard to the main event, but the lack of storylines intertwined has hurt it to this poin… [+1321 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "IGN",
            "title": "The MCU's Sebastian Stan Will Play a Young Donald Trump in Upcoming Movie The Apprentice - IGN",
            "description": null,
            "url": "https://www.ign.com/articles/the-mcus-sebastian-stan-will-play-a-young-donald-trump-in-upcoming-movie-the-apprentice",
            "urlToImage": null,
            "publishedAt": "2023-11-30T02:03:45Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "TMZ"
            },
            "author": "TMZ Staff",
            "title": "Teyana Taylor Shows Off Sexy Abs During 'Jimmy Kimmel' Appearance Amid Divorce - TMZ",
            "description": "Teyana Taylor is still making public appearances despite all her divorce drama with Iman Shumpert ... and she's looking fine as usual.",
            "url": "https://www.tmz.com/2023/11/29/teyana-taylor-shows-off-abs-nasty-divorce-iman-shumpert-appearance-jimmy-kimmel/",
            "urlToImage": "https://imagez.tmz.com/image/c9/16by9/2023/11/30/c9045f3afba545bbac9ce9cd704b97dc_xl.jpg",
            "publishedAt": "2023-11-30T02:01:00Z",
            "content": "Teyana Taylor is still making public appearances despite all her divorce drama with Iman Shumpert ... and she's looking fine as usual.\r\nThe singer just showed up to do an interview on Jimmy Kimmel's … [+1013 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "SEVENTEEN On Bringing 'The City' to Japan, Winning At the MAMA Awards & More | 2023 MAMA Awards - Billboard",
            "description": "SEVENTEEN caught up with Billboard's Tetris Kelly at the 2023 MAMA Awards in Tokyo, Japan. ►► Subscribe for more music news: http://blbrd.cm/Proracf►► See ou...",
            "url": "https://www.youtube.com/watch?v=hZZ1utF3ODo",
            "urlToImage": "https://i.ytimg.com/vi/hZZ1utF3ODo/maxresdefault.jpg",
            "publishedAt": "2023-11-30T02:00:18Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Oakridger.com"
            },
            "author": "Diana Leyva",
            "title": "'Christmas at Graceland' 2023 special: Watch Lana Del Rey and more - Oakridger",
            "description": "John Legend, Kacey Musgraves, Lana Del Rey and more will perform in honor of Elvis and his \"cherished Christmases in Memphis.\" Here's what to know.",
            "url": "https://www.oakridger.com/story/entertainment/tv/2023/11/29/christmas-at-graceland-2023-special-how-to-watch/71747856007/",
            "urlToImage": "https://www.oakridger.com/gcdn/authoring/authoring-images/2023/11/30/USAT/71749371007-nup-202445-02512.JPG?crop=999,562,x0,y0&width=999&height=562&format=pjpg&auto=webp",
            "publishedAt": "2023-11-30T01:44:45Z",
            "content": "Some of music's biggest names including John Legend, Kacey Musgraves, Lana Del Rey and Lainey Wilson are set to honor Elvis Presley during NBC's \"Christmas at Graceland\" on Wednesday night.\r\nThe arti… [+1993 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rolling Stone"
            },
            "author": "Ethan Millman",
            "title": "The Music Industry’s MeToo Wave Is Just Getting Started - Rolling Stone",
            "description": "New York's Adult Survivors Act set off lawsuits containing sexual abuse allegations against several of the music industry's most famous figures.",
            "url": "https://www.rollingstone.com/music/music-news/metoo-music-industry-adult-survivors-act-1234902450/",
            "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/11/ASA-explainer.jpg?crop=0px%2C114px%2C1800px%2C1015px&resize=1600%2C900",
            "publishedAt": "2023-11-30T01:44:24Z",
            "content": "The surge of sexual abuse lawsuits that hit some of the music industry’s most powerful figures last week isn’t over yet, several lawyers tell Rolling Stone.  \r\nLast week, as the window for New York’s… [+8300 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Beast"
            },
            "author": "Laura Bradley",
            "title": "'Golden Bachelor' Ex Claims He Was a Gold-Plated Jerk - The Daily Beast",
            "description": "Gerry Turner’s rosy reputation largely stems from his claim that he hasn’t seriously dated since his late wife’s death. Now, an alleged ex claims that this is far from the truth.",
            "url": "https://www.thedailybeast.com/golden-bachelor-gerry-turners-ex-claims-he-was-a-gold-plated-jerk",
            "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_375,w_668,x_118,y_383/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1701299494/GettyImages-1758572750_gyjk2t",
            "publishedAt": "2023-11-30T01:41:00Z",
            "content": "Golden BachelorGerry Turner quickly worked his way into Bachelor Nations hearts with a very romantic, very sad story: He and his late wife, Toni, were high school sweethearts who were married for dec… [+2439 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Carly Thomas",
            "title": "Shannen Doherty Says She Wants to “Embrace Life” Evan as Cancer Spreads to Her Bones - Hollywood Reporter",
            "description": "The actress continues to remain positive and push forward, saying she believes her \"greatest memory is yet to come.\"",
            "url": "https://www.hollywoodreporter.com/news/general-news/shannen-doherty-cancer-battle-health-update-1235699144/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/11/GettyImages-1174664081.jpg?w=1024",
            "publishedAt": "2023-11-30T01:15:33Z",
            "content": "Shannen Doherty has revealed that her stage 4 breast cancer has spread to her bones.\r\nWhile opening up about her ongoing health battle in an interview with People magazine, published online Wednesday… [+1383 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Alex Stedman",
            "title": "Disney CEO Thinks The Marvels Is Underperforming Because There Weren't Enough Executives - IGN",
            "description": "Disney CEO Bob Iger thinks he knows one of the reasons the MCU's latest, The Marvels, has been disappointing at the box office: not enough executives on the set.",
            "url": "https://www.ign.com/articles/disney-ceo-thinks-the-marvels-is-underperforming-because-there-werent-enough-executives",
            "urlToImage": "https://assets-prd.ignimgs.com/2023/11/15/marvels-thumb-1700083860848.jpg?width=1280",
            "publishedAt": "2023-11-30T00:18:56Z",
            "content": "Disney CEO Bob Iger thinks he knows one of the reasons the MCU's latest, The Marvels, has been disappointing at the box office: not enough executives on the set.\r\nSpeaking at the NYT Dealbook Summit … [+2955 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Erin Keller",
            "title": "Piers Morgan names royals who asked ‘troubling’ questions about Archie’s skin color - New York Post ",
            "description": "The former “Good Morning Britain” chat show host stated he does not believe alleged conversations about Archie’s skin color ever took place within the royal family.",
            "url": "https://nypost.com/2023/11/29/entertainment/piers-morgan-names-king-charles-and-kate-middleton-as-royals-who-asked-troubling-questions-about-archies-skin-color/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/11/PIERS-HP-LARGEPHOTO-1-1.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-11-30T00:04:00Z",
            "content": "Piers Morgan claims King Charles and Kate Middleton are the members of the royal family named in Omid Scobie’s Endgame: Inside the Royal Family and the Monarchys Fight for Survival as the two “racist… [+3680 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "HuffPost"
            },
            "author": "Elyse Wanshel",
            "title": "Keith Morrison Makes Rare Request After Stepson Matthew Perry's Death - HuffPost",
            "description": "The \"Dateline\" host, who married Perry’s mother when the actor was 12, finally broke his silence on his stepson’s death.",
            "url": "https://www.huffpost.com/entry/keith-morrison-matthew-perry-foundation_n_65678721e4b028b0f3cedd87",
            "urlToImage": "https://img.huffingtonpost.com/asset/6567ac7b2400005b165547b7.jpeg?cache=xLFwmTGRFN&ops=1200_630",
            "publishedAt": "2023-11-29T23:32:23Z",
            "content": "Dateline host Keith Morrison broke his silence this week on the tragic death of his famous stepson, Friends star Matthew Perry and he did so for a touching reason.\r\nLast month, Perry was found dead i… [+5574 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Al Pacino's girlfriend Noor Alfallah, mother of their newborn baby, says she has no plans to marry him - Yahoo Entertainment",
            "description": null,
            "url": "https://www.yahoo.com/entertainment/al-pacino-girlfriend-noor-alfallah-232500176.html",
            "urlToImage": null,
            "publishedAt": "2023-11-29T23:25:00Z",
            "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 239 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
        }
    ]
}

const Categories = () => {
    const { top5CategoryHeadlinesList } = NewsStore
    console.log(top5CategoryHeadlinesList);

    useEffect(() => {
        NewsStore.getTop5CategoryHeadlinesList()
    }, [])

    const catogoriesCarousels = useMemo(() => {
        return Object.entries(top5CategoryHeadlinesList).map(([key, value]) => (
            <Carousel key={key} category={key} list={value} />
        ))
    }, [top5CategoryHeadlinesList])

    return <div className={styles.root}>{catogoriesCarousels}</div>
}

export default Categories
