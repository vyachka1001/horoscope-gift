import React from 'react'
import './horoscope_scorpio.css'
import aries from '../../images/zodiac-signs/img-for-pages/stars.svg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsWind} from 'react-icons/bs'
import {GiHighGrass} from 'react-icons/gi'
import {AiFillFire} from 'react-icons/ai'
import ShowDate from '../date/index'

const HoroscopeScorpio = () => {
  return (
    <>
      <section id='aries'>
        <h2>Scorpio horoscope for today</h2>
        <h5><ShowDate /></h5>
        <div className="container horoscope_aries_container">
          <div className="left_column">
            <div className="aries_image>">
              <img src={aries} alt="aries image" />
            </div>
          </div>

          <div className="right_column">
            <div className="aries_cards">
              <article className="card">
                <AiFillFire className="aries_icon"/>
                <h5>Fire</h5>
                <small>3+ years working</small>
              </article>

              <article className="card">
                <GiHighGrass className="aries_icon"/>
                <h5>Earth</h5>
                <small>Your element</small>
              </article>

              <article className="card">
                <BsWind className="aries_icon"/>
                <h5>Wind</h5>
                <small>3+ years working</small>
              </article>
            </div>

            <horoscope className="horoscope">
              <h3>Today the Universe will answer some of your questions. It turns out that you were right about everything and doubted yourself in vain. It is useful on this day to relax with a book or a historical film - the main thing is to write down new information on the subcortex. You can compete with your friends in board games or start a new training that has been worrying you for a long time. In general, move your brains on this day - it's useful.</h3>
              <h3>Сегодня Вселенная ответит на несколько ваших вопросов. Окажется, вы во всем были правы и зря сомневались в себе. Полезно в этот день отдыхать за книгой или историческим фильмом – главное, записывать на подкорку новую информацию. Можно сразиться с друзьями в настолки или начать новое обучение, которое вас давно волновало. В общем, шевелите мозгами в этот день – полезно.</h3>
            </horoscope>

            <a href="#contact" className='button'>Lets talk</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HoroscopeScorpio