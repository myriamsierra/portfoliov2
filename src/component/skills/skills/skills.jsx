import React from 'react';
import Cards from './../skills-childs/cards-skills/cards-skills';
import Symbols from '../../components-réutilisable/symbols/symbols';
import Title from '../../components-réutilisable/title/title';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../../utils/theme-provider/dark-mode';
import ImgTest from './../../../assets/images/3d-gear-idea-settings-isolated-render-illustration-png.png'
import './skills.scss';

const Skills = () => {
    const { darkMode } = useTheme();

    //data modulable (a mettre en format json+tard)
    const symbol1 = "{";
    const symbol2 = "}";
    const title = "Mes compétences";

    const cardsData = [
        {
            titleRecto: "FRONT-END",
            textRecto: faCode,
            textVerso: ["HTML", "CSS/SCSS", "JavaScript", "React", "SEO"] 
        },
        {
            titleRecto: "DESIGN",
            textRecto: faBrush,
            textVerso: ["Photoshop", "Figma", "UX/UI Design", "Illustration", "Photographie"]
        },
        {
            titleRecto: "SOFT-SKILLS",
            textRecto: faMugHot,
            textVerso: ["Patience", "Curiosité", "Autonomie"]
        },
    ];

    //classes scss modulable 
    const classes = {
        skills:'skills',
        skillsBox : darkMode ? 'skills__box skills__box__darkmode':'skills__box',
        title : 'skills__title',
        cards :'skills__cards',
        symbol: 'skills__symbols',
        link: 'skills__link',
        picture: darkMode ? 'skills__picture skills__picture__darkmode' : 'skills__picture',
        illustration:'skills__illustration'
    };

    return (
        <div>
            <div className={classes.skills}>
                <div className={classes.skillsBox}>
                    <div className={classes.title}>
                        <Symbols symbols={symbol1} symbolssize={classes.symbol}/>
                        <Title h2={title}/>
                        <Symbols symbols={symbol2} symbolssize={classes.symbol}/>
                    </div>
                    <div className={classes.cards}>
                    {cardsData.map((data, index) => (
                        <Cards key={index} 
                            titleRecto={data.titleRecto} titleVerso={data.titleVerso} textVerso={data.textVerso}
                            textRecto={data.textRecto} 
                        />
                    ))}
                    </div>
                    <div className={classes.picture}><img src={ImgTest} className={classes.illustration} alt="bla"/></div>  
                </div>
            </div>
        </div>
    );
};

export default Skills;
