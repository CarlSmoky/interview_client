const defaultQuestions = [{
  question: "Talk about a time when you had to work closely with someone whose personality was very different from yours."
},
{
  question: "Give me an example of a time you faced a conflict while working on a team. How did you handle that?"
},
{
  question: "Describe a time when you struggled to build a relationship with someone important. How did you eventually overcome that?"
},
{
  question: "We all make mistakes we wish we could take back. Tell me about a time you wish you’d handled a situation differently with a colleague."
},
{
  question: "Tell me about a time you needed to get information from someone who wasn’t very responsive. What did you do?"
},
{
  question: "Describe a time when it was especially important to make a good impression on a client. How did you go about doing so?"
},
{
  question: "Give me an example of a time when you did not meet a client’s expectation. What happened, and how did you attempt to rectify the situation?"
},
{
  question: "Tell me about a time when you made sure a customer was pleased with your service."
},
{
  question: "Describe a time when you had to interact with a difficult client. What was the situation, and how did you handle it?"
},
{
  question: "When you are working with many customers, it’s tricky to deliver excellent service to them all. How do you go about prioritizing your customers’ needs?"
},
{
  question: "Tell me about a time you were under a lot of pressure. What was going on, and how did you get through it?"
},
{
  question: "Describe a time when your team or company was undergoing some change. How did that impact you, and how did you adapt?"
},
{
  question: "Tell me about the first job you’ve ever had. What did you do to learn the ropes?"
},
{
  question: "Give me an example of a time when you had to think on your feet in order to delicately extricate yourself from a difficult or awkward situation."
},
{
  question: "Tell me about a time you failed. How did you deal with the situation?"
},
{
  question: "Tell me about a time you had to be very strategic in order to meet all your16.top priorities."
},
{
  question: "Describe a long-term project that you managed. How did you keep everything moving along in a timely manner?"
},
{
  question: "Sometimes it’s just not possible toget everything on your to-do list done. Tell me about a time your responsibilities got a little overwhelming. What did you do?"
},
{
  question: "Tell me about a time you set a goal for yourself. How did you go about ensuring that you would meet your objective?"
},
{
  question: "Give me an example of a time you managed numerous responsibilities.How did you handle that?"
},
{
  question: "Give me an example of a time when you were able to successfully persuade someone to see things your way at work."
},
{
  question: "Describe a time when you were the resident technical expert. What did you do to make sure everyone was able to understand you?"
},
{
  question: "Tell me about a time when you had to rely on written communication to get your ideas across to your team."
},
{
  question: "Give me an example of a time when you had to explain something complex to a frustrated client. How did you handle this delicate situation?"
},
{
  question: "Tell me about a successful presentation you gave and why you think it was a hit."
},
{
  question: "Tell me about your proudest professional accomplishment."
},
{
  question: "Describe a time when you saw some problem and took the initiative to correct it rather than waiting for someone else to do it."
},
{
  question: "Tell me about a time when you worked under close supervision or extremely loose supervision. How did you handle that?"
},
{
  question: "Give me an example of a time you were able to be creative with your work."
},
{
  question: "What was exciting or difficult about it?"
},
{
  question: "Tell me about a time you were dissatisfied in your work. What could have been done to make it better?"
},
{
  question: "What would you do if you made a strong recommendation in a meeting, but your colleagues decided against it?"
},
{
  question: "How would you handle it if your team resisted a new idea or policy you introduced?"
},
{
  question: "How would you handle it if the priorities for a project you were working on were suddenly changed?"
},
{
  question: "What would you do if the work of an employee you managed did not meet expectations?"
},
{
  question: "What would you do if an important task was not up to standard, but the deadline to complete it had passed?"
},
{
  question: "What steps would you take to make an important decision on the job?"
},
{
  question: "How would you handle a colleague you were unable to form a positive relationship with?"
},
{
  question: "What would you do if you disagreed with the way a manager wanted you to handle a problem?"
},
{
  question: "What would you do if you were assigned to work with a difficult client? "
},
{
  question: "What would you do if you worked hard on a solution to a problem, and your solution was criticized by your team?"
},
{
  question: "How would you handle working closely with a colleague who was very different from you?"
},
{
  question: "You're working on a key project that you can't complete because you're waiting on work from a colleague. What do you do?"
},
{
  question: "You realize that an early mistake in a project is going to put youbehind deadline. What do you do?"
},
{
  question: "Tell us about a time where you had to bend the rules in order to achieve a goal or complete a task."
},
{
  question: "What interests you about this position?"
},
{
  question: "What certifications do you hold?"
},
{
  question: "What do you do to maintain your technical certifications?"
},
{
  question: "What automated-build tools or processes have you used?"
},
{
  question: "What development tools have you used?"
},
{
  question: "What languages have you programmed in?"
},
{
  question: "What source control tools have you used?"
},
{
  question: "What technical websites do you follow?"
},
{
  question: "Describe a time when you were able to improve upon the design that was originally suggested."
},
{
  question: "Describe the most innovative change that you have initiated and what you did to implement this change."
},
{
  question: "Given this problem (problem is based upon job requirements), what solution would you provide? Explain your thought process."
},
{
  question: "How do you handle multiple deadlines?"
},
{
  question: "How do you keep current on this industry?"
},
{
  question: "How do you troubleshoot IT issues?"
},
{
  question: "Tell me about the most recent project you worked on. What were your responsibilities?"
},
{
  question: "Tell me about the project you are most proud of and what your contribution was."
},
{
  question: "Give an exampleof where you have applied your technical knowledge in a practical way."
},
{
  question: "What is the biggest IT challenge you have faced, and how did you handle it?"
},
{
  question: "You are working at a client site, and the CTO of the client company has asked if she can see you. The CTO wants to know how much it would cost to bring in five more people on your team. She gives you very vague requirements of the job she is looking for you to do. What would you do?"
},
{
  question: "You have been asked to research a new business tool. You have come across two solutions. One is an on-premises solution; the other is cloud-based. Assuming they are functionally equivalent, why would you recommend one over the other?"
},
{
  question: "You have submitted a piece of code that has broken the client's website in production. You have found this bug while you were testing, and nobody else knows about it. What is your next move?"
},
{
  question: "You have learned that a business unit is managing a major component of the business using Excel spreadsheets and Access databases. What risks does this present, and what would you recommend be done to mitigate these risks?"
},
{
  question: "What is the most difficult project you have worked on, and how did you get through the challenging tasks?"
},
{
  question: "How do you explain technologies, and technical ideas to an audience who is unfamiliar with  the topic during a presentation or an important meeting?"
},
{
  question: "What is your favorite type of work to do in the IT / Cybersecurity / Technology field?"
},
{
  question: "What do you do to manage your time and stay on schedule and have your time management skills improved since startingyour career?"
},
{
  question: "What resources do you use to keep up with the newest IT / Cybersecurity / Technology developments in the field?"
},
{
  question: "What kind of safety procedures do you have in place for when you check your technical / programing work for mistakes? How do ensure that you do not overlook any mistakes?"
},
{
  question: "Tell us how you handle routine work."
},
{
  question: "Describe the most challenging written technical report or presentation that you have had to complete."
},
{
  question: "Tell me about your greatest success in using logic to solve an IT / Cybersecurity / Technology problem. "
},
{
  question: "Give me an example of a time when you applied your ability to use analytical techniques to define problems or design solutions."
},
{
  question: "What checks and balances do you use to make sure that you don't make mistakes?"
},
{
  question: "What is something you see yourself pursuing in the future, and what is something that you see yourself leaving behind going forward and why?"
},
{
  question: "Which software packages are you familiar with? What is the most interesting thing to you in working with one of these packages?"
},
{
  question: "What are you doing to stay current with the latest technology/ cybersecurity trends?"
},
{
  question: "What is an example of a problem where you had to think on your feet?"
},
{
  question: "What is your leadership style?"
},
{
  question: "When do you know a project is getting off track? If the project is not adhering to schedule, how do you get back on track?"
},
{
  question: "What is your ideal type of projectthat you like to work on and why?"
},
{
  question: "Do you have management experience?If so, what is your style of management? "
},
{
  question: "Have you managed remote teams and outsourced resources? "
},
{
  question: "How do you manage team members that are not delivering to their full potential?"
},
{
  question: "How do you deal with the job when you are overwhelmed or underperforming?"
},
{
  question: "How do you work with customers, sponsors and stakeholders?"
},
{
  question: "How do you prioritize tasks on a project?"
},
{
  question: "What is your preferred project management methodology? "
},
{
  question: "How do you gain agreement withinteams, or among multiple teams?"
},
{
  question: "What are your salary expectations?"
},
{
  question: "What is something you don’t want us to know?"
},
{
  question: "Tell me about your expertise in [insert field]."
},
{
  question: "I see you have worked with [insert technology].  Tell me about its features and benefits."
},
{
  question: "What experience have you had working with (insert technology)? "
},
{
  question: "Give me examples of your use of [insert technology] and how you adopted it for your last organization. "
},
{
  question: "This position requires a variety of skills.  Describe your absolute strengths applicable to the position."
},
{
  question: "Tell me how you stay current in your field on new or evolving [insert technologies or programs]."
},
{
  question: "Why are manholes round?"
},
{
  question: "You’ve been given an elephant. You can’t give it away or sell it. What would you do with the elephant?"
},
{
  question: "If you were a tree, what kind of tree would you be and why?"
},
{
  question: "We finish the interview,and you step outside the office and find a lottery ticket that ends up winning $10 million. What would you do?"
},
{
  question: "If you had to be shipwrecked on a deserted island, but all your human needs—such as food and water—were taken care of, what two items would you want to have with you?"
},
{
  question: "Are you a hunter or a gatherer?"
},
{
  question: "Designa spice rack for the blind."
},
{
  question: "How many pennies would fit into this room?"
},
{
  question: "If you had a choice between two superpowers, being invisible or flying, which would you choose?"
},
{
  question: "What was the last gift you gave someone?"
},
{
  question: "If you could compare yourself with any animal, which would it be and why?"
},
{
  question: "Give me an example of a time when you used your fact-finding skills to gain information needed to solve a problem.  Then tell me how you analyzed the information and came to a decision, if applicable."
},
{
  question: "Give me an example of a project you have completed, focusing on the analytical component."
},
{
  question: "What tools do you currently use on the job to aid you in quantitative analysis?"
},
{
  question: "What is the percentage of time you currently spend on the job dealing with analytical reports, analyses, and comparisons?  Tell me about a recent project that was primarily numbers-oriented.  Walk me through your procedure and thought processes. "
},
{
  question: "Give me an example of a project that relied heavily on quantitative analysis. "
},
{
  question: "Describe a specific accomplishment that demonstrates your analytical skills. "
},
{
  question: "Give me an example that demonstrates your ability to use a variety of approaches in your work. "
},
{
  question: "Let’s assume that you are given an assignment that requires a different methodology than you typically use.  Have you ever experienced this type of situation?  How did you go about completing your work?"
},
{
  question: "Tell me about a difficult problem you solved for a client"
},
{
  question: "Tell me about an assignment for which you had little or no previous experience.  What strategy did you adopt to complete the assignment? "
},
{
  question: "Give me an example that demonstrates your ability to manage a client’s billing and budgets. "
},
{
  question: "Give me an example of a project that demonstrates your ability to work within a client’s budgetary constraints. "
},
{
  question: "Sometimes you have to make a decision even when others believe that it may be premature.  Can you tell me about a time when you made a decision even when others were not ready to do so? "
},
{
  question: "While planning ahead is usually important, there are time when being spontaneous can lead to success, too.  Tell me about a time on the job when you were able to be spontaneous with good results."
},
{
  question: "Describe an experience that demonstrates your ability to evaluate a situation on the spot. "
},
{
  question: "Describe an important decision you made that affected the course of a project or an activity. "
},
{
  question: "Tell me about a time when you made a decision that at the time was risky. "
},
{
  question: "Describe a situation in which you had to defend your actions or recommendations because they were challenged by others. "
},
{
  question: "What was the most difficult decision you made in the last six months?  What made it so difficult?"
},
{
  question: "What was the biggest obstacle you had to overcome in order to incorporate a new idea or process?  Why was it an obstacle?  How did you overcome it? "
},
{
  question: "Give me an example of a time when you had to analyze another person or a situation carefully in order to be effective in guiding your action or decision.  "
},
{
  question: "Describe a situation when you were told by two different people how to handle a project two different ways.  What did you do and how did you arrive at a decision? "
},
{
  question: "Give me an example of when you’ve demonstrated the ability to make quick and accurate job-related decisions."
},
{
  question: "Tell me about a time when an upper-level decision or policy change held up your work."
},
{
  question: "Give me an example of a time when you stuck to policy or procedure when it may have been easier to go around the policy or procedure. "
},
{
  question: "Give me an example of a situation when you were not successful in dealing with a tough decision you had to make."
},
{
  question: "Tell me about an experience when you had a limited amount of time to make a difficult decision. "
},
{
  question: "Tell me about a decision that you made while under a lot of pressure. "
},
{
  question: "Describe a situation where you heard of some new technology and implemented it."
},
{
  question: "Describe a situation where you were not supported in performing a task and how you dealt with it."
},
{
  question: "Do you think of yourself as an internal entrepreneur and why?"
},
{
  question: "How do you determine if a plan is worth the risk of rocking the boat?"
},
{
  question: "If it were apparent that there was little support for something you felt strongly about, would you try it anyway?  Why?"
},
{
  question: "What do you think of the phrase 'no risk, no reward'?"
},
{
  question: "Describe a time when you weighed the pros and cons of a risk and decided to take it?"
},
{
  question: "Describe a time when you were criticized for taking a risk.  What was your reaction to the criticism?"
},
{
  question: "Do you believe in the concept of calculated risk and what does it mean to you? "
},
{
  question: "Describe a time when you seemed to be on the wrong side of an issue and what you did or did not do."
},
{
  question: "Success on the job, in part, depends on having good work relationships.  Tell me about a time when you were able to get the job done because you had such a relationship with another person."
},
{
  question: "Describe a situation in which your success depended upon communicating with people from different backgrounds and levels."
},
{
  question: "Tell me about a time on the job when you had to handle a sensitive situation."
},
{
  question: "Describe a situation when you were a relative newcomer and saw people doing things in ways you considered ineffective or inefficient.  How did you handle the situation?"
},
{
  question: "Tell me about how you dealt with a person who was inflexible.  Give me specific examples of tactics you employed. "
},
{
  question: "Describe a situation in which you had to decide the best way to summarize, organize and present complex information."
},
{
  question: "When working with people, we often find that one style doesn’t always work for every person, we have to be flexible in our style of relating to others.  Describe a situation when you had to vary your style with a particular individual."
},
{
  question: "Defending your point of view may not always be a popular position to take.  Tell me about a time when you had to do that."
},
{
  question: "Has there been a time when you thought you had a better idea than that of your supervisor(s)?  How did you handle the situation?"
},
{
  question: "Tell me about a time when you had a miscommunication with a client or coworker and how you resolved it."
},
{
  question: "Describe a time when you had to communicate something unpleasant to a supervisor."
},
{
  question: "At one time or another, we all have had problems getting our point across.  Give me an example of when this happened to you."
},
{
  question: "Tell me about a time when you didn’t communicate something unpleasant but should have.  What were the consequences?"
},
{
  question: "Gaining the cooperation of others can be difficult.  Give a specific example of when you had to do that."
},
{
  question: "Give me a specific example of when you had to motivate a group of people to get an important job done."
},
{
  question: "Tell me about a time when you had to rally the troops to complete a difficult assignment.  What did you do and what were the results? "
},
{
  question: "How do you balance the need to supervise your team without doing the work yourself? "
},
{
  question: "Give me an example of how you’ve motivated others."
},
{
  question: "Describe a situation when you had to mobilize others to take action toward a specific goal."
},
{
  question: "If you had to describe your leadership style, what would it be?  (Follow-up) Tell me about how you have implemented (or would implement) that style on the job."
},
{
  question: "Give me an example of when you had to exert your authority to get something accomplished.  (Follow-up) What were the consequences?"
},
{
  question: "Assume that you are managing a project and as the leader, you are expected to give feedback to team members.  Describe how you would give feedback to someone who is not contributing quality work."
},
{
  question: "Describe a situation in which you were responsible for a project and at least one of your team members had more experience or expertise than you did in one area."
},
{
  question: "Understanding how other people process information is often a part of being a leader on a project.  Describe an incident that you’ve experienced where understanding other people’s behavioral styles was key to the project’s success."
},
{
  question: "Give me an example of a time when you’ve been instrumental in empowering a person or a group to accomplish something."
},
{
  question: "At times, a situation arises when we can really “make our mark” on the project/business we’re working on.  Tell me about a time when you were involved in that kind of situation and how you took advantage of it."
},
{
  question: "How frequently do you meet with the employees under your direct supervision as a group?  What do you do in preparation?  At the meeting?  After the meeting?"
},
{
  question: "Describe a recent problem you had for which you involved your staff to arrive at a solution?  What approach did you take to get them to accomplish the task? "
},
{
  question: "Tell me about a specific time when you had to handle a tough morale problem."
},
{
  question: "Tell me about a time when you had to tell a staff member that you were dissatisfied with his/her work."
},
{
  question: "Describe a time when you came up with a creative solution to a problem between two employees."
},
{
  question: "Describe how you communicate priority projects to your staff without making them feel overwhelmed."
},
{
  question: "Describe the part you played in implementing a new system and/or technology in your organization."
},
{
  question: "Tell me how you dealt with those who expressed the sentiment, 'Why change when we have always done it this way?'"
},
{
  question: "What new technologies are available that you would like to implement?  Why?"
},
{
  question: "How do you encourage people to adopt new techniques or technologies?"
},
{
  question: "How do you instill ownership in people when new ways of doing things are introduced?"
},
{
  question: "Describe a project that you worked on.  Tell me about how you managed the project to assure that all deadlines were met."
},
{
  question: "Talk me through a project you’ve done, either on the job or as part of a course requirement. "
},
{
  question: "Describe a situation when you had to juggle several projects at the same time. "
},
{
  question: "Tell me about how you typically schedule your day.  To what extent do you use some kind of time management system and to what extent do you simply wait to see what turns up? "
},
{
  question: "Describe a time when you had to adjust your plans due to changing circumstances.  Tell me about a situation in which you were responsible for formulating plans for a large project."
},
{
  question: "There are times on the job when you have to develop a plan and stick to it, despite the obstacles.  Can you tell me about a time when that was true for you? "
},
{
  question: "Seeing a new way of doing a job can many times lead to greater productivity.  Give me an example of when you were able to see and implement a new way of getting the job done."
},
{
  question: "Tell me about a time when you were responsible for an aspect of a job that was particularly uninteresting.  How did you deal with it?"
},
{
  question: "Tell me about your technique/method/system for keeping track of matters requiring your attention."
},
{
  question: "Have you worked in a situation in which there were constant surprises or unanticipated events?  How did you manage responsibilities?"
},
{
  question: "Describe a time when your supervisor placed excessive demands on you and how you handled it. "
},
{
  question: "Tell me about a suggestion you made on the job to improve the way things worked.  What was the result?"
},
{
  question: "Describe a project that you were responsible for that required a large amount of energy over a long period of time. "
},
{
  question: "Describe a time when you developed an innovative approach or solution that resulted in the implementation of a new idea."
},
{
  question: "Describe a time when you developed a creative solution to a problem or designed an enhancement to a plan."
},
{
  question: "Give me an example of a time when you identified a key strategy for a brand that had positive business results."
},
{
  question: "Tell me specifically what experience you have had in defining strategies in positioning and new product/service launches."
},
{
  question: "Give me an example of a time when you demonstrated “out-of-the-box” thinking."
},
{
  question: "Tell me about one of the recent challenges you’ve faced strategically in your current job."
},
{
  question: "Give me an example of how you were able to take marketing [or other field] principles that you have studied and transfer them to your job."
},
{
  question: "Give me an example of a time when you were able to look at a challenge with a new perspective that resulted in an innovative solution, strategy, or approach."
},
{
  question: "Tell me about a time when you designed an innovative approach that had a dramatic and positive impact."
},
{
  question: "Describe a time when you successfully implemented an idea that led to better results."
},
{
  question: "Give me an example of an accomplishment, idea, or strategy that illustrates you are not governed by traditional rules or ways of thinking."
},
{
  question: "Describe a situation that demonstrates your ability to apply creativity and innovation to solving a problem."
},
{
  question: "Describe for me the kinds of things you’ve done in previous jobs to build teamwork with your peers."
},
{
  question: "It can be challenging to build relationships with people you haven’t worked with before.  Give me an example of how you’ve dealt with this situation in the past."
},
{
  question: "Tell me about a time when you used your enthusiasm to motivate a team to finish a project or assignment."
},
{
  question: "What’s the key to making a team work? Tell me about a time when you helped to orchestrate that “key” as a member of a team."
},
{
  question: "What role on a team do you find yourself most often playing?  Tell me about a specific instance when you found yourself in that role."
},
{
  question: "Describe your most recent group effort."
},
{
  question: "Give me an example of when you felt you were able to build motivation in your coworkers or employees reporting to you."
},
{
  question: "How often do you attend meetings with your peers (or group)?  What role did you play in the last meeting?"
},
{
  question: "Give me a specific example of what you did in your last/current position to contribute toward a teamwork environment."
},
{
  question: "Describe a situation in which you were able to positively influence the actions of others in a desired direction."
},
{
  question: "Describe a situation in which others within your organization depended on you."
},
{
  question: "Tell me about a situation when you had to work as part of a team that was not getting along well and how you dealt with it."
},
]

export {defaultQuestions};