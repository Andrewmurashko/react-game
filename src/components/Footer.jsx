import React from 'react'

function Footer() {
    
    return (
         <div class="footer__developers">
    <div class="developer developer__1st">Andrew Murashko
    <div class="developer__links">
    <a class="ico GitHub-ico developer__1st_GitHub" href="https://github.com/Andrewmurashko"><img src={'./assets/Github.svg'} alt={"G"} className="piece" /></a>
    <a class="ico telegram-ico developer__1st_telegram" href="https://t.me/AndrewMurashko"><img src={'./assets/Telegram.svg'} alt={"T"} className="piece" /></a>
    <a class="ico email-ico developer__1st_email" href="mailto: murashko.kbtem@gmail.com"><img src={'./assets/email.svg'} alt={"E"} className="piece" /></a>
    </div>
    </div>
    
    <div class="footer__school-logo-container">
    <a class="footer__school-logo" href="https://rs.school/js/"><img src={'./assets/logo-rsschool.svg'} alt={"E"} className="piece" /></a>
    React 2021-Q1
    </div>
    </div>
    );
}

export default Footer


  