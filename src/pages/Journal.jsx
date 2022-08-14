import React from 'react';
import ReactMarkdown from 'react-markdown'


export default function Journal() {

    const markdown = `# August 14th, 2022

    ### Title: England Travel Reflections
    
    ##### Introduction
    
        To catch you up, I 'graduated' from Adobe at the end of April 2022.  It 
        was an awesome 4 years but I thought it was time to do something stupid 
        with my life.  So I decided that this summer, I'm going to backpack 
        Europe.  Now if you know me, I'm not much of a planner.  So I figured I'll 
        just book a one way ticket to London and then figure it out.  After 
        talking to a colleague of mine who had solo traveled Asia and the Middle 
        East, he validated to me that I wasn't crazy.  'You'll just figure it out' 
        he said.  'And know that whatever happens, you'll be ok.'  One piece of 
        advise he gave me was if I felt like the trip needed more structure, then 
        to book an event in the area I was visiting.  That way, there was 
        something I could look forward to.  And all the procrascinating up until 
        the event, becomes purposeful dilly dallying until the event comes to be.  
        This was immenseley helpful.  Knowing I was going to London, I checked 
        what live events I could attend.  Some of my family members had attended 
        Coldplay's Music of Spheres show and highly recommended it.  Fortunately, 
        they were coming to Wembley Stadium during my stay here.  I booked my 
        ticket to see my favorite band.  It also made answering the question 'what 
        are you going to do in London' much easier to answer.
    
    ##### What's in my bag
    
        With this can-do attitude, I began to think what I'll need on this trip.  
        After watching some youtube videos, I knew that I wanted to backpack 
        Europe.  While having a suitcase is a luxury, it does hinder mobility.  
        It's not fun moving suitcases on sidewalks.  My step-brother advised me 
        that ideally, I should be prepared to walk at least half a mile with all 
        my belongings.  The cool thing about having a backpack is it maximizes my 
        mobility and it provides a space constraint.  It's counter-intuitive, but 
        knowing I was going to be limited on space forced me to think carefully 
        about what I really need to be comfortable.  Clothing wise, I packed 
    
        - 3 pants
            - sf
            - one pair of black Levi jeans
            - blue cargo pants
            - adidas sweatpants
    
        - 4 white t shirts
    
        - 3 button down dress shirts
            - two full sleeve shirts
            - one half sleeve
    
        - 7 pairs of boxers
    
        - 7 pairs of socks
    
        - Toiletries
    
        When I was packing clothes out of my closet, I prioritized the ones that 
        were the lightest.  The only items I ended up purchasing were my underwear 
        and socks.  I bought two pairs of travel underwear and 7 pairs of travel 
        socks.  The socks are made out of wool so that they keep my feet cool and 
        dry.  The travel underwear is made of magical material that maximizes 
        comfort and hygiene.
    
        I brought one fanny pack that I throw over my shoulder.  Not having 
        anything in my pockets reduces stress so much I cannot tell you.  Whenever 
        I head out the door, my little fanny is with me.
    
        I also brought a couple of bags for multi purpose reasons (storing dirty 
        clothes, having an extra bag to alleviate space in my bag etc.)
    
    
    ##### Reflections
        I think I wanted to start with England first because I knew it would be 
        the easiest.  It's culturally close to America, there's no language 
        barrier, and I have family in England I can go to if I needed a shoulder 
        to cry on.  I knew London was going to be a mega city, similar to New 
        York, which I like.  Also as a Pakistani American, England has had a huge 
        influence on Pakistan (before partition) and America (colonial days) so I 
        was curious to see how my life has been impacted by the people here.  
        Specifically, where does my tea addiction originate from?
    
    
        A few steretypes I had about England before I arrived were that 
            
            1. They have terrible food
            2. The people would be formal and more uptight
       
        I cannot tell you how wrong both of these turned out to be.
    
            1. The food is incredible.  In London, Birmingham, Manchester, and 
            Liverpool I was able to find really good restaurants.  I thought it 
            was going to be just fish n chips everywhere I went.  There are 
            excellent fish n chip shops here, but in addition to that, there is so 
            much diversity here and the food reflects that.  I have to sadly 
            admit, the desi food in the UK is better than the US.  Shoutout to 
            Wimslow road in the Manchester area.  
    
            2. The people here are cool as shit.  I find it so easy to start 
            joking with strangers here.  In America, I usually reserve banter for 
            my close friends, but here people engage in banter much more freely.  
            And they have self-deprecating humor which is really refreshing to be 
            around.
    
        I'm in love with England.  If I could not live in the U.S., I think this 
        would be the next country of choice for me.  The streets are fun to walk, 
        the houses are cute, and there is greenery to be seen nearly everywhere (
        despite drought conditions).  I have come at an incredible time, the 
        weather has mimicked California and I have not had a single day of 
        rain.  It is quite expensive here, particularily in London, but on a 
        Bay Area engineer salary, one can have fun here without stressing out 
        too much.  And overall, I can't recommend it enough.
    `

    return (
        <div className="Journal" style={{color: '#e0e0e0', textAlign: 'left', margin: '5%'}}>
            <h1 style={{'textAlign': 'center'}}>
                Backpacking 2022 Journal
            </h1>

            <br />

            <div>
                <ReactMarkdown children={markdown} style={{wordWrap: 'pre-wrap'}}>
                </ReactMarkdown>
            </div>


        </div>
    );
}
