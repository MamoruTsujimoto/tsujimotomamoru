import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import config from 'utils/config'
import functions from 'utils/functions'
import Layout from 'Layout/Layout'

//import ProfilePost from 'components/Profile/ProfilePost'

const Profile: NextPage = () => {
  const Birthdate = {
    year: config.profile.birth.year,
    month: config.profile.birth.month,
    date: config.profile.birth.date,
  }

  const age = functions.Birthdate(Birthdate)

  return (
    <>
      <Head>
        <title>Profile | {config.info.siteName}</title>
        <meta name='description' content={config.info.siteDescription} />
        <meta property='og:url' content={config.info.siteURL} />
        <meta property='og:image' content={config.info.ogp.image} />
        <meta property='og:title' content={config.info.siteName} />
        <meta property='og:description' content={config.info.siteDescription} />
        <meta name='twitter:image' content={config.info.ogp.image} />
      </Head>
      <Layout>
        <section id='profile'>
          <div className='left'>
            <div className='profile-image'>
              <Image src='/img/profile/profile.jpg' alt='Tsujimoto Mamoru with Didgeridoo' width='150' height='150' />
            </div>
            <div className='profile-info'>
              <ul>
                <li>
                  <h3>名前</h3>
                  <ul>
                    <li>
                      <span>{config.profile.names}</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3>年齢</h3>
                  <ul>
                    <li>
                      <span>{age}</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3>出生地</h3>
                  <ul>
                    <li>
                      <span>{config.profile.place.birthplace.place}</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3>現在の拠点</h3>
                  <ul>
                    <li>
                      <span>{config.profile.place.current_base.place}</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3>趣味</h3>
                  <ul>
                    <li>
                      <span>{config.profile.hobby.dance}</span>
                    </li>
                    <li>
                      <span>{config.profile.hobby.instrument}</span>
                    </li>
                    <li>
                      <span>{config.profile.hobby.plant}</span>
                    </li>
                    <li>
                      <span>{config.profile.hobby.etc}</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3>スキル</h3>
                  <ul>
                    <li>
                      <h4>フロントエンド</h4>
                      <ul>
                        <li>
                          <span>{config.profile.skils.frontend.html}</span>
                        </li>
                        <li>
                          <span>{config.profile.skils.frontend.css}</span>
                        </li>
                        <li>
                          <span>{config.profile.skils.frontend.javascript}</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4>バックエンド</h4>
                      <ul>
                        <li>
                          <span>{config.profile.skils.backend.serverside}</span>
                        </li>
                        <li>
                          <span>{config.profile.skils.backend.database}</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4>Contact</h4>
                      <ul className='contact'>
                        <li>
                          <a href={config.external.github.link}>
                            <FontAwesomeIcon icon={config.external.github.icon} />
                          </a>
                        </li>
                        <li>
                          <a href={config.external.twitter.link}>
                            <FontAwesomeIcon icon={config.external.twitter.icon} />
                          </a>
                        </li>
                        <li>
                          <a href={config.external.instagram.link}>
                            <FontAwesomeIcon icon={config.external.instagram.icon} />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className='right'>
            <h3>{config.profile.names}について</h3>
            <p>{config.profile.text.first}</p>

            <div id='grateful-life'>
              <figure>
                <Image src='/img/profile/grateful-life.jpg' alt='My Greateful Life' width='3013' height='3013' />
                <figcaption>What A Wonderful World</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* <ProfilePost
            title={config.profile.title}
            excerpt={config.profile.excerpt}
            category={config.profile.category}
            coverImage={config.profile.coverImage}
            date={config.profile.date}
            author={config.profile.author}
            slug={config.profile.slug}
          /> */}
      </Layout>
    </>
  )
}
export default Profile
