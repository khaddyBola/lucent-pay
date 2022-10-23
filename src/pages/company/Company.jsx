import React from 'react'
import './company.css'
import PagesHeader from '../../components/PagesHeader';
import { company } from '../../data';
import Card from '../../UI/Card';
import SectionHead from '../../components/SectionHead';
import Image from '../../Images/team-1.jpeg';

const Company = () => {
  return (
    <section className='companys'>
      <PagesHeader title='Company' page='Company' />
      <div className="container companys-container">
        <SectionHead title="About" className="company-head"/>
          <h2> <span>Who</span> We Are?</h2>
          <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, <br />
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>

          <div className='company-image-container'>
            <img src={Image} alt=''/>
          </div>

          <div className="company-wrapper">
          {
            company.map(({icon, title, info, id}) => {
            return (
            <Card key={id} className='company-card'>
              <img src={icon} alt="icon"/>
              <h4>{title}</h4>
              <small>{info}</small>
            </Card>
            )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Company;