import React, {Component} from 'react'
import logoem1 from './images/yes.png'
import "./Rowa.css"

class Onfooter extends Component{
    render(){
        return(
            <div className="Onfooterme">

                <div className="Ontopme" >
                    <div>
                        <h1>Jumia: Online Shopping in Nigeria - No. 1 Shopping Destination</h1>
                        <p>Jumia is your number one online shopping site in Nigeria. We are an online store where you can purchase all your electronics, as well as books, home appliances, kiddies items, <a href="#">fashion</a> items for men, women, and children; cool gadgets, computers, groceries, automobile parts, and more on the go. What more? You can have them delivered directly to you. Shop online with great ease as you pay with JumiaPay which guarantees you the safest online shopping payment method, allowing you to make stress free payments. Whatever it is you wish to buy, Jumia offers you all and lots more at prices which you can trust. Jumia has payment options for everyone irrespective of taste, class, and preferences. Here, you also have the option to make your payment on delivery for extra convenience. Shopping online in Nigeria is easy and convenient with Jumia. We provide you with a wide range of products you can trust. Take part in the deals of the day and discover the best prices on a wide range of products.</p><p>

Step out in style with Jumia Fashion and Style as we bring you awesome fashion collections from top brands such as Zara, Woodin, Fever London, St Genevieve, top quality shirts, vintage shirts and footwear from Nigerian indigenous designers like David Wej. Moreover, you can look through our wide selection of Ankara style and make your pick for that next event you have. Also, get classy women's shoes from top designers like Plum, Qupid as well as watches from Casio, Titan and more. Beautify yourself with cosmetics and skin care products from Mary Kay, House of Tara, Sleek, Maybelline and much more. Jumia makes online shopping fun with our new arrivals as well as huge discounts on a large selection of fashion items and more. Jumia has the original New Look fashion brand online for you to shop.

</p>
                    </div>
                    <div>
                        <h1>Buy Mobile Phones, Fashion, Electronics, Appliances & more on Jumia</h1>
                        <p>Be in the loop this year with new products and offers from Jumia. Brand your home with various electronics and home and office appliances from Binatone, Panasonic, Samsung, Toshiba, Sony, and LG. Get all the latest gadgets and devices for school projects from brands like HP, IMose, Lenovo, Samsung, and Apple with no hassles as you enjoy fast delivery service even to your institution. Jumia Nigeria also offers the latest innovative mobile phones such as Infinix Hot S3, Samsung Galaxy Note 9, Infinix Note 4, Tecno F2, Infinix Hot 6 Pro, Leagoo M9, Samsung Galaxy S9 as well as the latest Samsung S10 series from Samsung, and more. Also take advantage of computing products available to own laptops like the Dell Inspiron, printers and other storage devices such as hard drives at affordable prices. Get Professional Services online like insurance services, medical services, IT Training, educational services and so much more.</p>
                    </div>
                </div>
                <div className="holdme">
                    <div className="routeme"><img src={logoem1} alt = "images"/> </div>
                    <div className="routeme"><h7>New to JUMIA?</h7><br/><h8>Subscribe to our communications to receive special offers and latest news</h8><br/>
                    <input type="text" placeholder="Type your Email here!" /> <a>MALE</a><a>FEMALE</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Onfooter;