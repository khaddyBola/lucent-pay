import React from 'react'
import PagesHeader from '../../components/PagesHeader'
import './pricing.css';
import SectionHead from '../../components/SectionHead';
import { pricing } from '../../data';
import Card from '../../UI/Card';
import {faq} from '../../data';


const Pricing = () => {
  return (
    <section className='pricing'>
      <PagesHeader title='Pricing' page='Pricing' />
      <div className="container pricing-container">
        <SectionHead title="Pricing" className="pricing-head"/>
            <h2> <span>Best</span> Pricing for Your Need</h2>
            <p>
              Officia dignissimos incidunt nisi ipsam minima dolore. <br />
              Animi facilis exercitationem quam, perspiciatis illum ipsum <br />
              dolorem corrupti nisi necessitatibus impedit ea 
              consequatur hic!Lorem ipsum dolor sit.
            </p>

            <div className='pricing-wrapper'>
                {
                    pricing.map(({icon, name, title, dollar, button, icon2, id}) => {
                        return (
                            <Card key={id} className='pricing-card'>
                                <div className="pricing-card-img-container">
                                  <big className='pricing-icon'>{icon}</big>
                                </div>

                                <h4>{name}</h4>
                                <h3>{title}</h3>
                                <text>{dollar}10</text> <small>/transactions</small>
                                
                                <summary>{icon2} <small>Lorem ipsum dolor sit </small></summary>
                                <summary>{icon2} <small>Lorem ipsum dolor sit </small></summary>
                                <summary>{icon2} <small>Lorem ipsum dolor sit </small></summary>
                                <summary>{icon2} <small>Lorem ipsum dolor sit </small></summary>
                            
                                <h2>{button}</h2>
                            </Card>
                        )
                    })
                }
            </div>
             
      </div>

    <section className='faqs'>
      <div className="container faqs-container">
        <SectionHead title="FAQ" className="faq-head"/>
        <h2>Frequently <span>Asked</span> Questions</h2>
     
      <div className='faq-wrapper'>
          {
            faq.map(({question, answer, id}) => {
              return (
                <Card key={id} className='faq-card'>
                    <h4>{question}</h4>
                    <p>{answer}</p>
                  </Card>
                )
            })
          }
      </div>
      </div>
    </section>
  </section>
)
  
}





export default Pricing
