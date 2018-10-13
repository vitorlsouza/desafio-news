import React, { Component } from 'react';

import News from '../News';

class NewsList extends Component {
  state = {
    data: {
      status: 'ok',
      totalResults: 20,
      articles: [
        {
          source: {
            id: 'cnn',
            name: 'CNN',
          },
          author: 'Samuel Burke, CNN',
          title: "Why claims Khashoggi's Apple Watch recorded alleged murder are unlikely",
          description:
            'Experts have dismissed claims that a recording of the alleged killing of Saudi journalist Jamal Khashoggi may have been transmitted using his Apple Watch.',
          url:
            'https://www.cnn.com/2018/10/13/middleeast/khashoggi-apple-watch-analysis-intl/index.html',
          urlToImage:
            'https://cdn.cnn.com/cnnnext/dam/assets/181012102813-jamal-khashoggi-apple-watch-detalles-desaparicion-consulado-saudi-cafe-cnnee-00000000-super-tease.jpg',
          publishedAt: '2018-10-13T18:49:00Z',
          content: null,
        },
        {
          source: {
            id: 'cnn',
            name: 'CNN',
          },
          author: 'Analysis by Chris Cillizza, CNN Editor-at-large',
          title: "Melania Trump totally changed her story on the 'I really don't care' jacket",
          description:
            "In June, first lady Melania Trump took a trip to McAllen, Texas -- one of the epicenters of the family separation crisis occasioned by the policies of her husband's administration. Getting on and off the plane, she wore an army-green jacket with these words w…",
          url:
            'https://www.cnn.com/2018/10/13/politics/melania-trump-jacket-i-really-dont-care-do-u/index.html',
          urlToImage:
            'https://cdn.cnn.com/cnnnext/dam/assets/180621151938-melania-trump-zara-jacket-split-super-tease.jpg',
          publishedAt: '2018-10-13T18:02:21Z',
          content:
            "(CNN) In June, first lady Melania Trump took a trip to McAllen, Texas -- one of the epicenters of the family separation crisis occasioned by the policies of her husband's administration. Getting on and off the plane, she wore an army-green jacket with these w… [+2632 chars]",
        },
        {
          source: {
            id: null,
            name: 'Espn.com',
          },
          author: null,
          title: 'Knicks waive Joakim Noah',
          description:
            'Joakim Noah, who had two years left on his deal, has been waived by the Knicks, who will spread out the $37.8M owed to the center over the next three years.',
          url: 'http://www.espn.com/nba/story/_/id/24973763/new-york-knicks-waive-joakim-noah',
          urlToImage:
            'http://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0613%2Fr385070_1296x729_16%2D9.jpg',
          publishedAt: '2018-10-13T17:55:52Z',
          content:
            'After waiving Joakim Noah on Saturday, the New York Knicks will use the stretch provision on the remaining year of his contract to clear cap space in an effort to pursue top free agents in the summer of 2019, league sources told ESPN. Using the stretch provis… [+3209 chars]',
        },
        {
          source: {
            id: 'usa-today',
            name: 'USA Today',
          },
          author: 'Christal Hayes, Kevin Robinson, Eric Rogers',
          title:
            "'I don't have anything left': Hurricane Michael survivors scramble for food, water as death toll rises",
          description:
            "While crews continued their search Saturday for the thousands of people reported missing after Hurricane Michael ravaged Florida's panhandle, those devasted by the storm were left scrambling for food and water and tried to put the pieces of their lives back t…",
          url:
            'https://www.usatoday.com/story/news/nation/2018/10/13/hurricane-michael-survivors-scramble-food-crews-search-missing/1628842002/',
          urlToImage:
            'https://www.gannett-cdn.com/presto/2018/10/13/USAT/76e0eafb-eb45-4fc3-9011-472a2088f15d-1593.jpg?crop=7951,4472,x0,y778&width=3200&height=1680&fit=bounds',
          publishedAt: '2018-10-13T17:46:00Z',
          content:
            'Tom Garcia surveyed the damage to an apartment block on the coast road in Mexico Beach, Florida, pacing along in his walker through the debris on Friday. (Oct. 13) AP Blue sky and calm water belies the damage done by Hurricane Michael to the Mexico Beach, Fl.… [+5212 chars]',
        },
        {
          source: {
            id: null,
            name: 'Espn.com',
          },
          author: null,
          title:
            'Jim Taylor dies; was first of Vince Lombardi-era Packers inducted into Hall of Fame',
          description:
            'Jim Taylor, who was the NFL MVP in 1962 and won four championships with the Packers, has died at the age of 83.',
          url:
            'http://www.espn.com/nfl/story/_/id/24973592/jim-taylor-first-vince-lombardi-era-green-bay-packers-inducted-hall-fame-dies',
          urlToImage:
            'http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F0113%2Fr43845_1296x729_16%2D9.jpg',
          publishedAt: '2018-10-13T16:54:05Z',
          content:
            'Hall of Fame fullback Jim Taylor, who rushed for more than 1,000 yards over five straight seasons with the Green Bay Packers, died Saturday morning at the age of 83, the team announced. Taylor rushed for 8,207 yards and scored 91 touchdowns in his nine season… [+2239 chars]',
        },
        {
          source: {
            id: null,
            name: 'Accuweather.com',
          },
          author: null,
          title: "'Zombie' Leslie to finally unravel in Portugal, Spain this weekend",
          description: null,
          url:
            'https://www.accuweather.com/en/weather-news/zombie-hurricane-leslie-to-finally-unravel-in-portugal-spain-this-weekend/70006321',
          urlToImage: null,
          publishedAt: '2018-10-13T16:51:58Z',
          content: null,
        },
        {
          source: {
            id: 'the-washington-post',
            name: 'The Washington Post',
          },
          author: 'https://www.facebook.com/PhilipRuckerWP',
          title:
            'Pastor Andrew Brunson arrives in the US after being detained in Turkey for two years',
          description:
            'Andrew Brunson, detained on espionage and terrorism-related charges, was released Friday.',
          url:
            'https://www.washingtonpost.com/politics/trump-to-meet-evangelical-pastor-brunson-after-he-was-freed-from-turkish-jail/2018/10/13/352faf66-cef9-11e8-920f-dd52e1ae4570_story.html',
          urlToImage:
            'https://www.washingtonpost.com/resizer/zQzm91NXlVomb25nDvBE3fHBBso=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7BMKZ4GO7UI6RI7GITNKHU263Y.jpg',
          publishedAt: '2018-10-13T16:35:11Z',
          content:
            'Andrew Brunson, the American pastor who was freed Friday after being detained in a Turkish prison for nearly two years, has arrived in the United States and is headed to the White House for a meeting with President Trump. Brunson landed shortly after noon Sat… [+2860 chars]',
        },
        {
          source: {
            id: 'the-new-york-times',
            name: 'The New York Times',
          },
          author: null,
          title:
            "'Davos in the Desert,' a Saudi Prince's Glittering Showcase, Is Stained by a Grisly Accusation",
          description:
            'A conference for big investors started last year by Crown Prince Mohammed bin Salman has become a symbol of the West’s deepening disillusionment with him after the disappearance of a Saudi journalist.',
          url:
            'https://www.nytimes.com/2018/10/13/world/middleeast/saudi-arabia-conference-crown-prince-mohammed.html',
          urlToImage:
            'https://static01.nyt.com/images/2018/10/14/us/politics/14dc-saudi1/14dc-saudi1-facebookJumbo.jpg',
          publishedAt: '2018-10-13T16:27:33Z',
          content:
            'Endeavor, the Beverly Hills holding company for entertainment agencies, sent its co-chief executive, Ariel Emanuel, to help push along negotiations for a Saudi investment. Unlike Davos, the conference in Switzerland that draws a roster of the world’s wealthy … [+1863 chars]',
        },
        {
          source: {
            id: 'usa-today',
            name: 'USA Today',
          },
          author: 'Aamer Madhani, Christal Hayes',
          title:
            "'Voting is an act of resilience': Women's March activists try to turn up heat on GOP before midterms",
          description:
            'With less than four weeks to go before the midterm elections, tens of thousands of activists are expected to descend on Chicago and Massachusetts Saturday to urge voters to head to the polls and send a message about Brett Kavanaugh confirmation.',
          url:
            'https://www.usatoday.com/story/news/politics/2018/10/13/womens-march-chicago-brett-kavanaugh-midterms/1615624002/',
          urlToImage:
            'https://www.gannett-cdn.com/presto/2018/10/13/USAT/0121e695-e2b0-403a-a0f3-add4915240ae-AFP_AFP_1A01I2.jpg?crop=3499,1968,x0,y114&width=3200&height=1680&fit=bounds',
          publishedAt: '2018-10-13T15:50:37Z',
          content:
            'Unless you’re a political junkie, it’s not easy keeping track of the seats up for election. Here’s why midterm elections and chamber control matters. USA TODAY Women gather for a rally and march at Grant Park on Oct. 13, 2018 in Chicago. (Photo: Kamil Krzaczy… [+9736 chars]',
        },
        {
          source: {
            id: 'time',
            name: 'Time',
          },
          author: 'Associated Press',
          title: 'Tens of Thousands Protest Racism and Discrimination in Berlin',
          description:
            "Tens of thousands of people protested racism and discrimination in Berlin due to concerns about Germany's increasingly confident far right.",
          url: 'http://time.com/5424043/germany-protests-racism-discrimination/',
          urlToImage:
            'https://timedotcom.files.wordpress.com/2018/10/berlin-protest-thousands.jpg?quality=85',
          publishedAt: '2018-10-13T15:36:59Z',
          content:
            '(BERLIN) — Tens of thousands of people protested racism and discrimination Saturday in Berlin, a demonstration that came amid rising concerns about Germany’s increasingly confident far right. A wide range of groups, including pro-refugee, gay rights and Musli… [+859 chars]',
        },
        {
          source: {
            id: 'the-washington-post',
            name: 'The Washington Post',
          },
          author: null,
          title:
            'Inside an abandoned funeral home: A hidden compartment, a casket — and 11 dead infants',
          description:
            'The funeral home had been closed since April. On Friday, an anonymous letter led inspectors to a compartment hidden in the ceiling.',
          url:
            'https://www.washingtonpost.com/nation/2018/10/13/inside-an-abandoned-funeral-home-hidden-compartment-casket-dead-infants/',
          urlToImage:
            'https://www.washingtonpost.com/resizer/1AuiJyyn_wAKbmcHDPp0KezXaSs=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/P6BP7OVHAII6RLLPBADXBXG5YI.jpg',
          publishedAt: '2018-10-13T14:44:46Z',
          content:
            'The horrors inside the old Cantrell Funeral Home had been cleansed in the spring, people thought. State inspectors had walked into the east Detroit establishment one day in April and found two bodies grown over with mold, the Detroit Free Press reported. The … [+2693 chars]',
        },
        {
          source: {
            id: 'the-new-york-times',
            name: 'The New York Times',
          },
          author: null,
          title: 'Kushner Likely Paid No Federal Income Taxes for Years, Documents Show',
          description:
            'Confidential documents reviewed by The Times indicate that Jared Kushner, President Trump’s son-in-law and adviser, probably paid little or no income tax from 2009 to 2016.',
          url: 'https://www.nytimes.com/2018/10/13/business/jared-kushner-taxes.html',
          urlToImage:
            'https://static01.nyt.com/images/2018/10/14/business/14KUSHNERTAX-1-print/merlin_140617614_ef0abda7-848d-45f8-bde8-a8ced13fe72d-facebookJumbo.jpg',
          publishedAt: '2018-10-13T14:15:21Z',
          content:
            'The White House last year championed a sweeping revision of the nation’s tax laws that expanded many of the benefits enjoyed by real estate investors, allowing them to reap even larger deductions. “The Trump administration was in a position to clean up the ta… [+2067 chars]',
        },
        {
          source: {
            id: 'the-washington-post',
            name: 'The Washington Post',
          },
          author: 'https://www.facebook.com/profile.php?id=100011342442800&ref=br_rs',
          title: 'Taliban says US envoy held talks on possible paths to end Afghan war',
          description:
            'The U.S. Embassy said envoy Zalmay Khalilzad held meetings in Qatar, but would not confirm Taliban statement that he opened a new round of dialogue on the 17-year war.',
          url:
            'https://www.washingtonpost.com/world/asia_pacific/taliban-says-us-envoy-held-talks-on-possible-paths-to-end-afghan-war/2018/10/13/67f07376-ccd4-11e8-ad0a-0e01efba3cc1_story.html',
          urlToImage:
            'https://www.washingtonpost.com/resizer/3uYCiord5dBM_urEd4Eq-9L_G-w=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/27MNEJGO54I6REQP3VJODLSFOA.jpg',
          publishedAt: '2018-10-13T14:04:26Z',
          content:
            'KABUL — The Trump administration’s special adviser on Afghan peace met this week with Taliban representatives in Qatar, a spokesman for the insurgent group said Saturday. He said the talks included “working toward finding a peaceful resolution to the Afghan c… [+5133 chars]',
        },
        {
          source: {
            id: 'the-new-york-times',
            name: 'The New York Times',
          },
          author: null,
          title:
            'Óscar Romero, Archbishop Killed While Saying Mass, Will Be Named a Saint on Sunday',
          description:
            'He was one of the most prominent church leaders in Latin America when he was killed in 1980. He’ll be canonized with Pope Paul VI and four others.',
          url:
            'https://www.nytimes.com/2018/10/13/world/europe/oscar-arnulfo-romero-saint-canonization.html',
          urlToImage:
            'https://static01.nyt.com/images/2018/10/15/world/15xp-romero/15xp-romero-facebookJumbo.jpg',
          publishedAt: '2018-10-13T13:58:17Z',
          content:
            'In a 2015 interview, Roberto Cuéllar, a lawyer who worked with Archbishop Romero, said that the violence was pitting “the poor against the poor.” “He would be bitter to see that after reaching the peace accords that we are still in the same place,” Mr. Cuélla… [+1083 chars]',
        },
        {
          source: {
            id: null,
            name: 'Mlive.com',
          },
          author: 'Matt Durr | mattdurr@mlive.com',
          title: 'Mega Millions results for 10/12/18; did anyone win the $548M jackpot?',
          description: '',
          url:
            'https://www.mlive.com/lottery/index.ssf/2018/10/mega_millions_results_for_1012.html',
          urlToImage:
            'https://image.mlive.com/home/mlive-media/width620/img/lottery_impact/photo/mega-millions-lotteryjpg-0092d9a3af70be8e.jpg',
          publishedAt: '2018-10-13T11:18:48Z',
          content:
            'Matt Durr | MLive.com LANSING, MI – The Mega Millions jackpot is now at a near record-breaking amount as there was no winner of the $548 million jackpot for the drawing held on Friday, Oct. 12. That means the jackpot for Tuesday, Oct. 16 will be worth $654 mi… [+249 chars]',
        },
        {
          source: {
            id: 'bleacher-report',
            name: 'Bleacher Report',
          },
          author: 'Joon Lee',
          title: '108-Win Red Sox Now Seen as Inexperienced Underdogs in ALCS Against Astros',
          description:
            "It seemed like everyone in Fenway felt it: uncertainty about the  Red Sox 's chances heading into the playoffs.    Boston shortstop Xander Bogaerts noticed...",
          url:
            'https://bleacherreport.com/articles/2800334-108-win-red-sox-now-seen-as-inexperienced-underdogs-in-alcs-against-astros',
          urlToImage:
            'https://img.bleacherreport.net/img/images/photos/003/768/732/hi-res-e34034c60faa539845aa1ab67eca9559_crop_exact.jpg?w=1200&h=1200&q=75',
          publishedAt: '2018-10-13T11:00:01Z',
          content:
            "Likely regular-season MVP Mookie Betts for now is an ALCS first-timer coming off a poor plate performance in Boston's division series. Billie Weiss/Boston Red Sox/Getty Images It seemed like everyone in Fenway felt it: uncertainty about the Red Sox 's chances… [+7275 chars]",
        },
        {
          source: {
            id: 'the-new-york-times',
            name: 'The New York Times',
          },
          author: null,
          title: 'Snowstorm Kills at Least 8 Climbers in Nepal',
          description:
            'The climbers were killed near their base camp on Mount Gurja in the Himalayas. Among the dead and the missing were five South Koreans, including a world-record holder, and the team’s local guides.',
          url:
            'https://www.nytimes.com/2018/10/13/world/asia/nepal-climbers-himalaya-mountains.html',
          urlToImage:
            'https://static01.nyt.com/images/2018/10/14/world/14nepal/14nepal-facebookJumbo.jpg',
          publishedAt: '2018-10-13T10:21:44Z',
          content:
            'Rescuers said early Saturday morning that they had located the bodies of eight climbers near Mount Gurja’s base camp, which sits more than 11,000 feet above sea level. But helicopters could not land in the area long enough to retrieve them because of strong w… [+1067 chars]',
        },
        {
          source: {
            id: null,
            name: 'Espn.com',
          },
          author: null,
          title: 'Ups and downs of bullpenning on display as Brewers take Game 1',
          description:
            "Milwaukee's out-getters both thrived and survived in an NLCS-opening win. But can the Brew Crew possibly walk the same fine line three more times to put away the Dodgers?",
          url:
            'http://www.espn.com/mlb/story/_/id/24970295/mlb-ups-downs-bullpenning-display-milwaukee-brewers-take-game-1',
          urlToImage:
            'http://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F1012%2Fr446192_1296x729_16%2D9.jpg',
          publishedAt: '2018-10-13T06:34:02Z',
          content:
            "MILWAUKEE -- The aim of bullpenning is supposed to be to prevent runs, not generate them. Even when it comes to that, it seems the Milwaukee Brewers cannot follow convention. Editor's Picks Dodgers ace Clayton Kershaw struggled to execute in Friday night's Ga… [+11538 chars]",
        },
        {
          source: {
            id: 'the-wall-street-journal',
            name: 'The Wall Street Journal',
          },
          author: null,
          title: 'US Edges Toward New Cold-War Era With China',
          description: null,
          url:
            'https://www.wsj.com/articles/u-s-edges-toward-new-cold-war-era-with-china-1539355839',
          urlToImage: null,
          publishedAt: '2018-10-12T20:21:50Z',
          content: null,
        },
        {
          source: {
            id: 'time',
            name: 'Time',
          },
          author: 'Jamie Ducharme',
          title:
            "Millions of Americans Could Be Identified Using Consumer Genetic Databases—Even If They've Never Taken a DNA Test",
          description:
            'A new study says 60% of Americans of European descent could be identified by information in consumer genetic databases.',
          url: 'http://time.com/5423170/dna-test-identify-millions/',
          urlToImage: 'https://timedotcom.files.wordpress.com/2018/10/dna-testing.jpg?quality=85',
          publishedAt: '2018-10-12T19:50:32Z',
          content:
            'Up to 60% of Americans of European descent could be identified using only a DNA sample, some basic personal information and consumer genetic databases—even if they’ve never done a genetic test themselves, according to a new study published in Science. Some 7 … [+5752 chars]',
        },
      ],
    },
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.data.articles.map(d => (
            <News key={d.title} data={d} />
          ))}
        </ul>
      </div>
    );
  }
}

export default NewsList;
