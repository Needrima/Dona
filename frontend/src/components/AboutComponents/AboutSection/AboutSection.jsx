import React from 'react'
import './style.scss'
import AboutImg from '../../../assets/images/static/about.jpg'

const AboutSection = () => {
  return (
    <section className="section-p1" id="about-head">
        <img src={AboutImg} alt="about image" />

        <div>
            <h2>Who We Are?</h2>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sequi esse magni ipsam autem alias laborum minima sunt odit, excepturi magnam consectetur, officia modi animi eaque consequatur veritatis labore architecto?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus tenetur id mollitia sequi, tempora quibusdam, velit repellat et ipsam vitae possimus atque doloremque dolore dolores dolorum doloribus culpa architecto quis.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit harum eius aliquam, temporibus, voluptatem debitis fugit tenetur unde quasi repudiandae dolor illum recusandae itaque voluptates inventore? Reiciendis labore iure vel!
            </p>
            <marquee behavior="" direction="" bgcolor='#ccc' loop='-1' scrollamount='5' width='100%'>
                Get your cool and stunning anime images from us. We are here to serve you with the best anime hoodie to give you the fashionistic look you deserve. 
            </marquee>
        </div>
    </section>
  )
}

export default AboutSection