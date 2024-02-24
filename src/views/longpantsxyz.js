import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './longpantsxyz.css'

const Longpantsxyz = (props) => {
  return (
    <div className="longpantsxyz-container">
      <Helmet>
        <title>longpants.xyz</title>
        <meta property="og:title" content="longpants.xyz" />
      </Helmet>
      <header data-role="Header" className="longpantsxyz-header">
        <span className="longpantsxyz-contact">
          contact - stanley@longpants.xyz
        </span>
        <span className="longpantsxyz-contact1">
          <Link to="/" className="longpantsxyz-navlink">
            newest
          </Link>
          <span>
            {' '}
            - oldest -
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <Link to="/history" className="longpantsxyz-navlink1">
            all posts
          </Link>
        </span>
      </header>
      <div className="longpantsxyz-post-setup">
        <div className="longpantsxyz-title-date-body">
          <span className="longpantsxyz-post-heading">Introduction</span>
          <span className="longpantsxyz-date-posted">02/23/2024</span>
          <div className="longpantsxyz-container1">
            <span className="longpantsxyz-body">
              <span>
                Let me clarify, before I put any opinion of mine on the
                Internet, something important about myself: I am in no way
                radical, obsessive, or a believer of any conspiracy out there. I
                also do not believe I could ever hurt anything larger than a
                fly. If I somehow hurt anyone in the world with my words alone,
                I absolutely did not intend for it.
              </span>
              <br className="longpantsxyz-text02"></br>
              <br className="longpantsxyz-text03"></br>
              <span>
                Now to introduce myself more formally: my name is Stanley
                Longpants. I have worked at Aiom Corp in Manhattan for ten
                years, as of today. My official job title is ‘Senior Aiom
                Personality AI Expert.’ Someone familiar with the corporate
                world may notice how vaguely that title implies my actual
                responsibilities. I believe that might be on purpose, so that I
                cannot contest what I am asked of when my upper requires it,
                although this is probably a resolved issue in the job contract
                anyway. Whatever.
              </span>
              <br className="longpantsxyz-text05"></br>
              <br className="longpantsxyz-text06"></br>
              <span>
                Aiom Corp is very likely the most unique single private company
                in the entire world. No other organization beholds such a
                powerful combination of departments involved in either
                biological research or artificial intelligence. This is probably
                a given to most people familiar with Aioms, which, at this
                point, might as well be at least two-thirds of the world. They
                make ‘organic robots’ for the average consumer, or whatever else
                you want them simplified to - who else does?
              </span>
              <br className="longpantsxyz-text08"></br>
              <br className="longpantsxyz-text09"></br>
              <span>
                But it is seriously understated how ridiculously powerful Aiom
                Corp is. If it were not for the oil industry, I would easily
                call them the most powerful in the world, but subsidized,
                private automobile ownership exists, and that will reign supreme
                for as long as there is oil to be sold. Despite that, the extent
                that artificial intelligence has entered our everyday lives
                through the form of fake humans has reached a critical point of
                requiring assessment.
              </span>
              <br className="longpantsxyz-text11"></br>
              <br className="longpantsxyz-text12"></br>
              <span>
                I swear that I am not a Ted Kazynski. (I will admit that he
                makes valid points. I also admit that he was clearly ignorant to
                the value that industrial progress has brought the human race,
                but enough has been said about his views by this point.) My
                views are not driven by religious bias. Of course I cannot help
                but have a personal bias towards the state of things, but what
                isn’t personal in one’s life? And I am certainly also not bought
                or paid for by anyone. These are all thoughts of my own,
                gathered after years of studying, researching, and assessing the
                state of things, not professionally but as a hobby.
              </span>
              <br className="longpantsxyz-text14"></br>
              <br className="longpantsxyz-text15"></br>
              <span>
                With all that said, I feel as if I am the only sane person in
                New York City who realizes how awful America has become.
              </span>
              <br className="longpantsxyz-text17"></br>
              <br className="longpantsxyz-text18"></br>
              <span>
                However, this blog does not exist to write a manifesto. There is
                not a single manifesto ever that did much good in the world, at
                least by my definition of what a manifesto is. It makes me
                cringe to admit, but this blog will probably be nothing more
                than a place to vent my own frustrations into an empty void and
                nothing more, as suggested by my one and only friend, Dr.
                Harbinger.
              </span>
              <br className="longpantsxyz-text20"></br>
              <br className="longpantsxyz-text21"></br>
              <span>
                (To satisfy her request, Dr. Harbinger asks that I not use her
                name in reference to her, and to clarify that our relationship
                is purely therapist to patient. She is the doctor, I am the
                patient.)
              </span>
              <br className="longpantsxyz-text23"></br>
              <br className="longpantsxyz-text24"></br>
              <span>
                Harbinger has been at the front of my dam of frustrations for a
                little over a year now in the form of biweekly one hour
                sessions. She has heard all that I have had to say about Aioms,
                recent city development, the state of American politics on all
                levels of government, ongoing environmental destruction,
                capitalized addiction, and my lack of friends or a relationship.
              </span>
              <br className="longpantsxyz-text26"></br>
              <br className="longpantsxyz-text27"></br>
              <span>
                She told me that I have a lot of ideas that could use polishing
                on paper. I never considered myself a writer, but I have little
                else happening these days, aside from a stalled project and my
                job. Maybe the view of my thoughts combined with my reflection
                on the screen would do me some good.
              </span>
              <br className="longpantsxyz-text29"></br>
              <br className="longpantsxyz-text30"></br>
              <span>
                This post will serve as an intro to my blog. I don’t intend to
                keep a strict schedule for this, but Harbinger suggested that I
                tend to it at least weekly. To anyone who stumbles across this,
                forgive me if my demeanor intimidates. I swear I do not mean to
                condescend to any folks.
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Longpantsxyz
