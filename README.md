## Contributors
- [Ari Agress](https://github.com/ariagress) 
- [Franco Phan](https://github.com/Frank-5850) 
- [Marcus G](https://github.com/mgdeveloper45) 
- [Seena Nadimi](https://github.com/seenanadimi) 

## How to run project

- run `git clone git@github.com:alphaworks-react-team/team2_ui_presentation.git`
- run `npm install` in project directory
- run `npm start`

## Research

## General UI Principles

### 1. Place users in control of the interface: Keep users in control makes them comfortable and want to use your site.
* Make actions reversible
* Create an easy-to-navigate interface (Provide visual cues/Predictability)
* Provide informative feedback (Every action should have a clear reaction)
* Show the visibility of system status (Countdown timer)
### 2. Make it comfortable for a user to interact with a product
* Eliminate all elements that is irrelevant to your users experience
* Don’t ask users for data they’ve already entered
* Avoid jargon and system-oriented terminology (Use easy terms we all understand “buy” instead of “roost”)
* Design large targets for important functions
* Design accessible interfaces that try to accommodate for everyone
* Use real world metaphors (ex. A trash bin to signify “delete” or “trash”)
* Engineer for errors (Error messages to help guide user)
* Protect a user’s work (Users should not lose their work due to an error)
### 3. Reduce the amount of mental processing power required to use a product
* Chunking for sequences of international or actions (ex. Using indentations in phone numbers to help with a cluttered look. 5101234567 vs. (510)123-4567))
* Reduce the number of actions require to complete a task (“KISS” - T.S.)
* Recognition over recall (ex. Mail logo for e-mail instead of re-inventing the mail icon to be unique)
* Promote visual Clarity (Less clutter, more contrasting colors, organization [rule of 3rds!!!])
### 4. Make user interfaces consistent
* Visual consistency [style] (Same colors, fonts, and icons should be present throughout the product)
* Functional consistency [Behavior] Objects should work the same throughout the whole interface
* Consistent with user expectations (Follow platform conventions. Don’t reinvent patterns. Don’t try to reinvent terminology)

#### Source
[The 4 Golden Rules of UI Design](https://xd.adobe.com/ideas/process/ui-design/4-golden-rules-ui-design/)



## The Gutenberg Diagram

![Gutenberg Diagram](http://www.vanseodesign.com/blog/wp-content/uploads/2011/02/writgutenberg-diagram.png)

"The Gutenberg diagram describes a general pattern the eyes move through when looking at evenly distributed, homogenous information..."

The pattern applies to text-heavy content (i.e. novels, newspaper)

Gutenberg diagram divides layout into 4 quadrants
- Primary optical area **TOP/LEFT**
- Strong fallow area **TOP/RIGHT**
- Weak fallow area **BOTTOM/LEFT**
- Terminal (Primary) area **BOTTOM/RIGHT**

"Reading gravity path" is a term to describe the natural movement of your eyes that sweep across and down the page in a series of horizontal movements called "axes of orientation".

Also suggested by the "Gutenberg diagram", the strong and weak fallow areas fall outside of this "reading gravity path" which then receive minimal attention unless emphasized visually.

Important elements should be placed along this reading gravity path (ex Logo in top/left ,image in center of page, call to action(button or eye catcher), contact info in bottom right).

"Naturally this is for left to right reading languages and would be reversed for right to left reading languages." This may be true however most of the research found below on this topic are done through the western lens. 

- [Designing for the Arab User](https://www.freecodecamp.org/news/designing-for-the-arab-user-basic-arabic-ux-for-business-6ff29d4c7c60/)

- [Mirroring: how to design for Arabic users](https://blog.prototypr.io/mirroring-how-to-design-for-arabic-users-a1dbcd3aa566)

- [5 Differences Between Chinese and Western Website Design](https://www.nanjingmarketinggroup.com/blog/5-differences-chinese-western-website-design)

- [How to adapt your UX for China](https://uxdesign.cc/how-to-adapt-your-ux-for-china-73f2ab789570)


#### Source

[What Are The Different Web Design Patterns?](https://visualhierarchy.co/blog/web-design-patterns/)

[3 Design Layouts: Gutenberg Diagram, Z-Pattern, And F-Pattern](https://vanseodesign.com/web-design/3-design-layouts/)

## Z-Pattern Layout

![z-pattern](http://www.vanseodesign.com/blog/wp-content/uploads/2011/02/writz-pattern.png)

As the name describes you can assume the layout follows the shape of the letter Z. 

Readers will start at the **top left**, go to the **top right**, followed a diagonal move to the **bottom left** and then finish at the **bottom right**.

The main difference between Gutenberg diagram is that the **Z-pattern** suggests the viewers will pass through the fallow areas, while the Gutenberg diagram suggest viewers will usually skip the fallow areas all together.

"The **Z-pattern** is good for simple designs with a few key elements that need to be seen..."

#### IMG Example

[ex_1](https://blog.trymyui.com/wp-content/uploads/2020/07/calming-ux-design-tips-trymyui-usability-testing-blog.png) | [ex_2](https://cdn.sanity.io/images/599r6htc/production/d3a2eb7fe9b3dff89552996a4865ae7b77d7e234-1520x816.png?w=693&q=75&fit=max&auto=format&dpr=2)

[ex_3](https://miro.medium.com/max/4800/1*gSXy2vu8lzDbUvcrEScY9g.png) | [ex_4](https://miro.medium.com/max/4800/1*KqOIcVh1KQTkHZW0dAnLDw.png)


### Zig-Zag Pattern ###

We can extend the **Z-pattern** by doing a series of z-movements instead of one big z-movement.

Naturally readers will continue to move to the right and then down back to the left and continue right repeating that over and over until we get to the bottom right or terminal area. This is refereed to a zig-zag pattern. This predictability allows designers to create layouts that allows for better readability and overall efficiency of use.


### Golden Triangle Pattern

![Golden Triangle](http://www.vanseodesign.com/blog/wp-content/uploads/2011/02/writgolden-triangle.png)

The **Z-pattern** also leads to what's called as the golden triangle pattern. If you go from **top/left** to **top/right** down to **bottom/left** that creates the **golden triangle**. This pattern suggest your most important information needs to be placed inside of the triangle.

#### Source

[What Are The Different Web Design Patterns?](https://visualhierarchy.co/blog/web-design-patterns/)

[3 Design Layouts: Gutenberg Diagram, Z-Pattern, And F-Pattern](https://vanseodesign.com/web-design/3-design-layouts/)

[What Is the Z-Pattern Layout & When to Use It?](https://instapage.com/blog/z-pattern-layout)

[Z-Shaped Pattern For Reading Web Content](https://uxplanet.org/z-shaped-pattern-for-reading-web-content-ce1135f92f1c)

[Figma Hierarchy](https://www.figma.com/resources/learn-design/hierarchy/)

## Neumorphism / Soft UI

Soft UI aka Neumorphism means using shadows and highlights to make shapes appear as though they are slightly extruded. It gets its name from a term called “skeuomorphism, which we will talk about later. It brings back some almost retro 3D styling to the more modern Flat UI. 

IMAGE

Neumorphism UI elements look like they’re connected to the background, as if the elements are extruded from the background or inset into the background. They’ve been described by some as “Soft UI” because of the way soft shadows are used to create the effect. IMAGE

Another way to understand Neumorphism UI is to compare it to Material Design. An example is to use a regular card component to draw a distinction between the two. 

IMAGE

A core part of Neumorphism elements is the use of two shadows: a light shadow and a dark shadow. That’s how we get that sort of “raised” effect and we can create variations by changing the “light source” of the shadows. 

IMAGE

```
box-shadow: 20px 20px 50px #00D2C6,
      	   -30px -30px 60px #00FFFF;
```

The main characteristic of a Neumorphism interface is that it blends with the background and does so by having a similar or same background color as the underlying element. 

IMAGE

Downsides to Neumorphism: One of the downsides of Neumorphism that has been pointed out is that it shouldn’t be applied to elements that can have various states, like inputs, select elements, progress bars, and others. These states include: User interaction (Hover, active, focus, visited), Validation states (Error, success, warning, disabled).

The background color constraint in Neumorphism takes away that convenience. If the background color of the button matches the background color of what it’s on top of, we lose the ability to make it stand out visually with a unique color.

UX and accessibility rules require some elements to look different in each of their respective validation states and user interaction states. Neumorphism constraints and restrictions severely limit the customization options that are required to achieve the different styles for each possible state. Variations will be very subtle and aren’t possibly able to cover every single state.

Neumorphic elements also take more space (inside padding and outside margin) due to the shadow and rounded corners. A Neumorphic effect wouldn’t look so good on a small-sized element simply because the visual effects consume the element.

The ideal element for Neumorphism are cards, or any other static container element that doesn’t have states based on user interaction.

#### Source 
[Neumorphism and CSS](https://css-tricks.com/neumorphism-and-css/)

[Soft UI Neumorphism in Adobe XD](https://uxdesign.cc/create-soft-ui-neumorphism-in-adobe-xd-bc08bb4cb79d)


## Skeuomorphism

Skeuomorphism is a term most often used in graphical user interface design to describe interface objects that mimic their real-world counterparts in how they appear and/or how the user can interact with them. A well-known example is the recycle bin icon used for discarding files. 

IMAGE(trash can)

The idea was simple; computer interfaces would be much more intuitive to users if skeuomorphic design was applied. 

Skeuomorphism makes interface objects familiar to users by using concepts they recognize.

Skeuomorphism’s use made interfaces more familiar and easier to use. Apple’s mobile operating system, iOS, used skeuomorphism heavily across its user interface (e.g., buttons resembling glossy ‘real’ buttons, photos with white borders looking like physical photographs, etc.). 

IMAGE(apple applications)

Downsides to Skeuomorphism: skeuomorphic design led to huge amounts of clutter on the desktop. They brought too many useless details to our computers which we no longer needed.

Critics of skeuomorphism argue that designers created theatrics instead of experiences. An example would be the iPad’s version of an e-reader: 

IMAGE

Excessive gradients and nuances make for cluttered UI’s that actually make things harder to use.

For critics, skeuomorphic design sacrificed ease of use, interface scalability, and navigability. It was difficult to scale a skeuomorphic design because it relied on defined proportions and ratios.

In response, the design community moved towards flatter, more ambiguous and standardized design styles.

The Big Comeback: And now we have the digitalization of things from watches, to cars, and appliances. 

The internet of things (IoT) is bringing skeuomorphic design back into the forefront of design thinking.

Instead of interacting with a flat surface, like a phone or tablet screen, users are now digitally interacting with more real world objects. 

IMAGE(Apple Watch)

Modern Skeuomorphism, therefore, is the bridge at the intersection of digital and industrial design. It is about facilitating non-traditional device interaction without sacrificing usability. It is about enriching and enlivening real world objects in the context of our human physiology.

Moreover, we have the rise of augmented and virtual reality. We can now interact with objects in a real world simulation. We can use our hands to touch and feel digital objects, place them on top of surfaces, and experience real world physics in a digital arena.

Skeuomorphism is more important than ever, but it has to adapt. We can no longer rely on directly mimicking real world experiences, but rather, we must deconstruct our physical interactions to their most basic elements — understanding the physics of the real world and then applying those affordances to our digital interactions.

#### Source

[Skeuomorphism Design](https://medium.muz.li/skeuomorphic-design-a-controversial-ux-approach-that-is-making-a-comeback-a0b6e93eb4bb)

[Skeuomorphism](https://www.interaction-design.org/literature/topics/skeuomorphism)                                                        

