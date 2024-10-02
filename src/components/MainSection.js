import React from "react";
import "../styles/MainSection.css"
const MainSection = () => {

    return (
        <section className="main-section">
            <div className="welcome-part">
                <h1>Welcome to Pop Rock Crystal Shop</h1>
                <p>Here you'll find unique phone accessories, crystals, and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!</p>
                <button className="shop-now">Shop Now</button>
                <button className="about-us">About Us</button>
            </div>
            <div className="card">
                <img src="https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QM9aP6psi0S5kPMyarBxUgypM-4PRGRQ3z79i2eR0hUPgbfxn1BxFh2tLIF1nDoCSvbjJ4S8Ggw6DYfAGu06y7qLeb7I6PJiCHYZCu~1HlIhpQbLR7Z62YYpLbD~unVbQ~YG5DrPRy-7wQjf~F9vMWHxS-b4q7aQPHk0tvXA1Ey-rlktGBYt1wtqYU9fCcseSgVZwmtxvCP38ByPxx0vML7cbE2Thb8ekdsO0h6u4QwTIpVVh76kUorAqKEqWNQOKIUNvc-mcSz6TifJCtsdEmaX6yORqF2kdMAx6vGJeZFWnML4QHIeaW-OHEHlwNwQg2~gjivTDQLuOKS~sb-Y1w__" alt="card"/>
                <div class="desc">Crystal Agate Phone Grip - 18.99$</div>
            </div>
            <div className="svg-container">
            <svg width="260" height="36" viewBox="0 0 260 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_60)" filter="url(#filter0_d_1_60)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C8.20435 2 7.44129 2.31607 6.87868 2.87868C6.31607 3.44129 6 4.20435 6 5L6 23C6 23.7956 6.31607 24.5587 6.87868 25.1213C7.44129 25.6839 8.20435 26 9 26H27C27.7956 26 28.5587 25.6839 29.1213 25.1213C29.6839 24.5587 30 23.7956 30 23V5C30 4.20435 29.6839 3.44129 29.1213 2.87868C28.5587 2.31607 27.7956 2 27 2H9ZM18.531 17.969C18.6718 18.1098 18.7509 18.3008 18.7509 18.5C18.7509 18.6992 18.6718 18.8902 18.531 19.031C18.3902 19.1718 18.1992 19.2509 18 19.2509C17.8008 19.2509 17.6098 19.1718 17.469 19.031L12.969 14.531C12.8992 14.4613 12.8437 14.3786 12.8059 14.2874C12.7681 14.1963 12.7487 14.0987 12.7487 14C12.7487 13.9013 12.7681 13.8037 12.8059 13.7125C12.8437 13.6214 12.8992 13.5387 12.969 13.469L17.469 8.969C17.5387 8.89927 17.6215 8.84395 17.7126 8.80621C17.8037 8.76848 17.9014 8.74905 18 8.74905C18.0986 8.74905 18.1963 8.76848 18.2874 8.80621C18.3785 8.84395 18.4613 8.89927 18.531 8.969C18.6007 9.03873 18.656 9.12152 18.6938 9.21262C18.7315 9.30373 18.7509 9.40138 18.7509 9.5C18.7509 9.59862 18.7315 9.69627 18.6938 9.78738C18.656 9.87848 18.6007 9.96127 18.531 10.031L15.3105 13.25H22.5C22.6989 13.25 22.8897 13.329 23.0303 13.4697C23.171 13.6103 23.25 13.8011 23.25 14C23.25 14.1989 23.171 14.3897 23.0303 14.5303C22.8897 14.671 22.6989 14.75 22.5 14.75H15.3105L18.531 17.969Z" fill="#8A93E5"/>
</g>
<g clip-path="url(#clip1_1_60)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M257 2C257.796 2 258.559 2.31607 259.121 2.87868C259.684 3.44129 260 4.20435 260 5V23C260 23.7956 259.684 24.5587 259.121 25.1213C258.559 25.6839 257.796 26 257 26H239C238.204 26 237.441 25.6839 236.879 25.1213C236.316 24.5587 236 23.7956 236 23V5C236 4.20435 236.316 3.44129 236.879 2.87868C237.441 2.31607 238.204 2 239 2H257ZM247.469 17.969C247.328 18.1098 247.249 18.3008 247.249 18.5C247.249 18.6992 247.328 18.8902 247.469 19.031C247.61 19.1718 247.801 19.2509 248 19.2509C248.199 19.2509 248.39 19.1718 248.531 19.031L253.031 14.531C253.101 14.4613 253.156 14.3786 253.194 14.2874C253.232 14.1963 253.251 14.0987 253.251 14C253.251 13.9013 253.232 13.8037 253.194 13.7125C253.156 13.6214 253.101 13.5387 253.031 13.469L248.531 8.969C248.461 8.89927 248.378 8.84395 248.287 8.80621C248.196 8.76848 248.099 8.74905 248 8.74905C247.901 8.74905 247.804 8.76848 247.713 8.80621C247.622 8.84395 247.539 8.89927 247.469 8.969C247.399 9.03873 247.344 9.12152 247.306 9.21262C247.268 9.30373 247.249 9.40138 247.249 9.5C247.249 9.59862 247.268 9.69627 247.306 9.78738C247.344 9.87848 247.399 9.96127 247.469 10.031L250.69 13.25H243.5C243.301 13.25 243.11 13.329 242.97 13.4697C242.829 13.6103 242.75 13.8011 242.75 14C242.75 14.1989 242.829 14.3897 242.97 14.5303C243.11 14.671 243.301 14.75 243.5 14.75H250.69L247.469 17.969Z" fill="#8A93E5"/>
</g>
<circle cx="61" cy="14" r="7" fill="#8A93E5"/>
<circle cx="85" cy="14" r="7" fill="#D7DBFF"/>
<circle cx="109" cy="14" r="7" fill="#D7DBFF"/>
<circle cx="133" cy="14" r="7" fill="#D7DBFF"/>
<circle cx="157" cy="14" r="7" fill="#D7DBFF"/>
<circle cx="181" cy="14" r="7" fill="#D7DBFF"/>
<circle cx="205" cy="14" r="7" fill="#D7DBFF"/>
<defs>
<filter id="filter0_d_1_60" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="3"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0.576471 0 0 0 0 0.898039 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_60"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_60" result="shape"/>
</filter>
<clipPath id="clip0_1_60">
<rect width="24" height="24" fill="white" transform="translate(6 2)"/>
</clipPath>
<clipPath id="clip1_1_60">
<rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 260 2)"/>
</clipPath>
</defs>
</svg>
            </div>
        </section>
        
        
    )
    
}

export default MainSection;