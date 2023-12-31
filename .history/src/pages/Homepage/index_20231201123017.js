import React, { useMemo, useEffect } from 'react'
import { observer } from 'mobx-react'

import NewsCard from 'src/components/NewsCard'

import styles from './index.module.css'
import NewsStore from 'src/stores/NewsStore'
import NewsCardLoading from 'src/components/NewsCardLoader'

const mockData = [
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
],]

const Homepage = () => {
    const { searchedTopHeadlinesList, activeCountry, loadingTopHeadlines } =
        NewsStore

    useEffect(() => {
        NewsStore.getTopHeadlinesList()
    }, [activeCountry])

    const loadingTopHeadlinesElement = useMemo(() => {
        if (!loadingTopHeadlines) {
            return null
        }

        return Array(10).map((_, index) => <NewsCardLoading key={index} />)
    }, [loadingTopHeadlines])

    const topHeadlinesListElement = useMemo(
        () =>
            searchedTopHeadlinesList.map((headline, index) => (
                <NewsCard
                    index={index}
                    key={headline.id}
                    title={headline.title}
                    shortDescription={headline.description}
                    imageUrl={headline.urlToImage}
                />
            )),
        [searchedTopHeadlinesList]
    )

    return (
        <div className={styles.root}>
            {loadingTopHeadlinesElement}
            {topHeadlinesListElement}
        </div>
    )
}

export default observer(Homepage)
