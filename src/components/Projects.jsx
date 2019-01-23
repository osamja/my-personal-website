class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
        };
    }

    render() {
        return (
            <div className="ProjectHeader">
                <h2>Projects</h2>
                <p>Here are some of the projects I've worked on.</p>
                <div className="ProjectDetails">
                    <h3>Side Projects</h3>
                    <h4><a target="" href="https://www.youtube.com/watch?v=ZAlZrwFGx04&feature=youtu.be">NextWalk</a></h4>
                    <p>iOS app that would let students on campus walking towards the same direction, pair up with other students heading the same way.</p>

                    <h4>Home Server</h4>
                    <p>Setup a home server than can be remotely accessed anywhere. Utilized the SSH daemon, port forwarding, and dynamic DNS.</p>

                    <h4><a target="_blank" href="http://osamjaved.com/projects/ML/centroid/centroid.html">Simple Centroid Classifier</a></h4>
                    <p>Jupyter notebook with visualizations for me to understand how to do classification using only the mean of two features. </p>

                    <h4>Home Cat5e Installation</h4>
                    <p>Our home had unconnected cat5e ethernet cables just sitting in the walls. I installed RJ-45 ethernet jacks on these wires and ran them all to a gigabit switch I had installed inthe garage. Also got 100% wifi coverage (house + backyard) by installing two wireless access points.</p>

                    <h4><a target="_blank" href="https://github.com/osamja/local_sockets">LAN File Sharing</a></h4>
                    <p>P2P app that lets you share files with others on the same network as you. Since the app only connects devices on the same router, transfer speeds are fast regardless of internet connection speeds. Utilized Python's TKinter library to have a cross platform client. Am planning to port this as an add-on in the Chrome/Firefox store.</p>

                    <h4>Motion Sensor LED Staircase</h4>
                    <p>Placed white LED's on every step. Had a motion sensor on top/bottom of the staircase, all connected to an Arduino which would initialize a light sequence to sequentially turn on each light as the user walked up/down the stairs. </p>
                </div>
            </div>
        );
    }
}