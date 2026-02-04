**Animation Theory & Motion**  
Dive into the basics of animation and its uses in UX design  
  
Complete  
  
6m read  
  
12 exercises  
  
250 PX  
Review lesson  
  
  
  
Animation is an umbrella term for the whole field of moving elements (like images or text). Motion graphics are a type of animation that describes moving or animated graphic design. Animations consist of sets of frames that create an illusion of motion when put together.  
Animations can add character to your designs and improve usability by giving users feedback on their actions. Understanding the basics of animation theory is the first step in efficiently adding motion to your designs.  
**EXERCISE #1**  
**Animation**  
##   
  
An animation is a series of static images linked together to mimic real-world motion. Its primary function is to reflect the system's status and provide feedback on users' actions.  
**In general, there are 2 possible triggers for animations:**  
* When users do something. For example, when users press a button, a loader appears to indicate that the action has been registered.  
* When the system state changes. For example, once an app is launched, a welcome animation appears.  
Overall, animation in design enhances the presentation and interactivity of a product. However, moderation is key. Some users may find extra motion annoying and intrusive, and it may negatively influence their experience and impression of the product.++[[1]](https://app.uxcel.com/#anchor-1)++  
  
  
  
  
  
**EXERCISE #2**  
**Animation timeline**  
##   
  
A timeline is a fundamental component of animation software and tools, used to organize and manipulate various elements to create the illusion of motion. Think of it as a digital canvas where you can arrange and control different elements over time.  
A timeline typically consists of several layers, each representing a different aspect of the animation, such as character movement, background changes, special effects, and sound. Each layer contains keyframes, which are specific points in time where a change occurs. These keyframes define the state or position of the elements at that particular moment.  
  
  
  
  
  
**EXERCISE #3**  
**Animation keyframes**  
##   
  
In animation, a keyframe serves as a marker that indicates a significant change for an element. For example, when you're creating an app screen transition, you set a starting keyframe for the initial design and an ending keyframe for the final look.  
These keyframes act like bookmarks that outline how your app screen should appear at those specific points. The animation software then fills in the rest, ensuring a smooth transition between the two states. You could use keyframes to demonstrate how a button grows and changes color when pressed.++[[2]](https://app.uxcel.com/#anchor-2)++  
Essentially, keyframes guide the animation tool on what transformations should happen and when they should occur. In animation software, you'll see keyframes represented as small diamonds or circles on the timeline.  
  
  
  
  
  
**EXERCISE #4**  
**Animation duration**  
##   
  
The duration of an animation determines how long a user interface element's movement or transition will take. Quick animations are often more subtle and can feel seamless within the user experience. However, it's important to strike a balance; if an animation is overly slow, it might lead to user frustration by delaying interaction. For most cases, the optimal duration falls within the range of 100 to 500 milliseconds.  
The complexity of the animation should also be considered. Simpler animations may work well at the lower end of the range, while more intricate ones might benefit from slightly longer durations. By carefully adjusting animation durations, you can enhance usability and engagement while ensuring a pleasant and efficient user journey.  
  
  
  
  
  
**EXERCISE #5**  
**Animation delay**  
##   
  
The animation’s delay tells us when the animation starts. If the delay is set to 0, the animation will play immediately once triggered by a user action or page load. For instance, when a user clicks a button, a pop-up element can appear immediately with no perceptible pause.  
When the delay is assigned a positive value, the animation initiates after a specific interval from the moment it's triggered. Consider an image gallery where each image fades in one after the other with a slight delay, creating an elegant sequence as the user scrolls down the page.  
Alternatively, if a negative delay is employed, the animated element appears to already be in motion when triggered. For instance, upon page load, a banner might slide in from the left with a -200ms delay, making it look like it was already moving before the page even fully loaded.  
  
  
  
  
  
**EXERCISE #6**  
**Linear timing function**  
##   
  
Linear animations are the most basic of animations. These animations move at a constant speed, and their speed curve is a straight line graph.  
Animations that progress following a linear curve appear mechanical at best and unnatural at worst. In the real world, objects follow the laws of physics when it comes to things like momentum; they start slow, then speed up, then slow down or stop. However, linear curves can be useful in things like color transitions.  
  
  
  
  
  
**EXERCISE #7**  
**Easing timing function**  
##   
  
Animations with easing functions change speed over time, similar to a car accelerating and decelerating. The graph of this motion is depicted by an easing curve. The animation starts slowly, picks up speed, and then gradually slows down again before coming to a stop. Easing curves add natural fluidity to the motion of digital objects, making animations more visually appealing and realistic.  
There are 3 basic types of easing curves: ease-in, ease-out, and ease-in-out. Each offers a different way to control how the speed changes, thereby enhancing the overall feel and effectiveness of the animation.  
  
  
  
  
  
**EXERCISE #8**  
**Ease-in curve**  
##   
  
Ease-in curves start slowly and gradually speed up. They are similar to a roller coaster that slowly picks up speed before the top and then zooms down.  
While ease-in curves are more natural than linear curves, the way they abruptly end isn’t the most natural motion. They’re an excellent option for elements that complete their animation offscreen, though.  
**Pro Tip:** Ease-in timing function works great for things like system notifications.  
  
  
  
  
  
**EXERCISE #9**  
**Ease-out curve**  
##   
  
An ease-out curve is the opposite of an ease-in curve. They start out fast, then slow down and end gradually. They’re more realistic, as they remind us of real-world actions like throwing a ball. If your animation ends onscreen, an ease-out curve is an excellent choice for creating a snappy and pleasing animation.  
  
  
  
  
  
**EXERCISE #10**  
**Ease-in-out curve**  
##   
  
Ease-in-out animations start slow, gain momentum toward the middle, then slow down again before stopping. Ease-in-out curves don’t have to be symmetrical, though.  
Google’s Material Design recommends using an asymmetrical curve with faster easing in than easing out.++[[3]](https://app.uxcel.com/#anchor-3)++ Doing so accentuates animation and makes it look natural and responsive.  
Not all objects in the real world move smoothly like easing curves do. So, there are two other types of motions you’ll want to master: the spring and the bounce.  
  
  
  
  
  
**EXERCISE #11**  
**Spring animation**  
##   
  
In a spring animation, motion mimics the natural movement of springs. Pushing or pulling a spring stretches or compresses it. After you let it go, it continues oscillating back and forth until settling in its final state.  
One thing to keep in mind with spring animations is that the object can move past its start and end points, much like a spring oscillates in real life.  
  
  
  
  
  
**EXERCISE #12**  
**Bounce animation**  
##   
  
Bounce animations represent an alternating movement trajectory of an object encountering the ground. In a bounce, there's a definite stopping point, or target value, that the object doesn't overshoot. Think of a ball bouncing on the ground. It stops the second it hits the floor before rebounding back up.  
