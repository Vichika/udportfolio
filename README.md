# Website Optimization Project

## Getting Started

    ### Option 1
        - You can view a live running website of these files at vichika.github.io/udportfolio
        - If you're interested in the benchmark results of the website's optimizations, you can 
        go to https://developers.google.com/speed/pagespeed/insights/ and paste in the url to 
        see the results.

    ### Option 2
        1. Clone or download these files locally and run them on a server of your own.
        2. Read the udacity.md file here to learn more about running your file locally and
        making it accessible remotely if you're unfamilar with the process.
        3. Once the index.html file is running, you can follow the second bullet point of Option
        1 to test the site.

## Optimizations done
    - manually optimize pizzaria.jpg in GIMP photo editing software to greatly reduce file size 
    while maintaing acceptable image quality.
    - use gulp imagemin plugin to help optimize the rest of the images 
    - use gulp to minimize js files (both perfmatters.js and main.js)
    - use gulp "critical" plugin to implement critical css internally on both index.html and pizza.html
    - made modifications to changePizzaSizes function in main.js, optimized looping construct
    - made modifications to 'DOMContentLoaded' event listener, optimized looping construct and moved 'items'
    variable definition inside event listener

## Sources for help with this Project
    - https://css-tricks.com/gulp-for-beginners/
    - udacity forums and webcast videos