import {defs, tiny} from './examples/common.js';

const {
    Vector, Vector3, vec, vec3, vec4, color, hex_color, Matrix, Mat4, Light, Shape, Material, Scene,
} = tiny;

class Cube extends Shape {
    constructor() {
        super("position", "normal",);
        // Loop 3 times (for each axis), and inside loop twice (for opposing cube sides):
        this.arrays.position = Vector3.cast(
            [-1, -1, -1], [1, -1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, -1], [-1, 1, -1], [1, 1, 1], [-1, 1, 1],
            [-1, -1, -1], [-1, -1, 1], [-1, 1, -1], [-1, 1, 1], [1, -1, 1], [1, -1, -1], [1, 1, 1], [1, 1, -1],
            [-1, -1, 1], [1, -1, 1], [-1, 1, 1], [1, 1, 1], [1, -1, -1], [-1, -1, -1], [1, 1, -1], [-1, 1, -1]);
        this.arrays.normal = Vector3.cast(
            [0, -1, 0], [0, -1, 0], [0, -1, 0], [0, -1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0],
            [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0],
            [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, -1], [0, 0, -1], [0, 0, -1], [0, 0, -1]);
        // Arrange the vertices into a square shape in texture space too:
        this.indices.push(0, 1, 2, 1, 3, 2, 4, 5, 6, 5, 7, 6, 8, 9, 10, 9, 11, 10, 12, 13,
            14, 13, 15, 14, 16, 17, 18, 17, 19, 18, 20, 21, 22, 21, 23, 22);
    }
}

class Cube_Outline extends Shape {
    constructor() {
        super("position", "color");
        //  TODO (Requirement 5).
        // When a set of lines is used in graphics, you should think of the list entries as
        // broken down into pairs; each pair of vertices will be drawn as a line segment.
        // Note: since the outline is rendered with Basic_shader, you need to redefine the position and color of each vertex
        this.arrays.position = Vector3.cast(
            [0,0,0], [1,0,0],
            [1,0,0],[1,1,0],
            [1,1,0],[0,1,0],
            [0,1,0],[0,0,0],
        );
        this.arrays.color = [vec4(1,0,0,1),vec4(1,0,0,1),
            vec4(0,1,0,1),vec4(0,1,0,1),
            vec4(0,0,1,1),vec4(0,0,1,1),
            vec4(0,0,1,1),vec4(0,0,1,1),
        ];
        //this.indices = false;
        this.arrays.position = Vector3.cast(
            [-1, -1, -1],
            [1, -1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, -1],
            [-1, 1, -1], [1, 1, 1], [-1, 1, 1],[-1, -1, -1],
            [-1, -1, 1], [-1, 1, -1], [-1, 1, 1], [1, -1, 1],
            [1, -1, -1], [1, 1, 1], [1, 1, -1], [-1, -1, 1],
            [1, -1, 1], [-1, 1, 1], [1, 1, 1], [1, -1, -1],
            [-1, -1, -1], [1, 1, -1], [-1, 1, -1]);
        this.arrays.normal = Vector3.cast(
            [0, -1, 0], [0, -1, 0], [0, -1, 0], [0, -1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0],
            [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0],
            [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, -1], [0, 0, -1], [0, 0, -1], [0, 0, -1]);
        this.arrays.color = [vec4(1,1,1,1),vec4(1,1,1,1),vec4(1,1,1,1),vec4(1,1,1,1),
            vec4(1,1,1,1),vec4(1,1,1,1),vec4(1,1,1,1),vec4(1,1,1,1),
            vec4(1,1,1,1),vec4(1,1,1,1),vec4(1,1,1,1),vec4(1,1,1,1),
            vec4(1,1,1,1),vec4(1,1,1,1),vec4(1,1,1,1),vec4(1,1,1,1),
            vec4(1,1,1,1),vec4(1,1,1,1),vec4(1,1,1,1),vec4(1,1,1,1),
            vec4(1,1,1,1),vec4(1,1,1,1),vec4(1,1,1,1),vec4(1,1,1,1),
        ];
        // Arrange the vertices into a square shape in texture space too:
        this.indices.push(3,6, 6,7, 7,9, 9,3, 3,1, 1,0, 0,5, 5,15, 15,1, 15,19, 21,16, 10,18);
    }
}

class Cube_Single_Strip extends Shape {
    constructor() {
        super("position", "normal");
        // TODO (Requirement 6)
        this.arrays.position = Vector3.cast(
            [-1,-1,-1],[-1,1,-1],[1,-1,-1],
            [-1,1,-1],[1,1,-1],[1,-1,-1],
            [1,1,-1],[1,1,1],[1,-1,1],
            [1,1,-1],[1,-1,1],[1,-1,-1],
            [1,1,1],[1,-1,1],[-1,1,1],
            [-1,1,1],[1,-1,1],[-1,-1,1],
            [-1,1,-1],[-1,-1,1],[-1,-1,-1],
            [-1,1,-1],[-1,1,1],[1,1,-1],
            [-1,1,1],[1,1,1],[1,1,-1],
            [-1,-1,1],[-1,-1,-1],[1,-1,1],
            [-1,-1,-1],[1,-1,1],[1,-1,-1],
        );
        this.arrays.normal = Vector3.cast(
            [-1,-1,-1],[-1,1,-1],[1,-1,-1],
            [-1,1,-1],[1,1,-1],[1,-1,-1],
            [1,1,-1],[1,1,1],[1,-1,1],
            [1,1,-1],[1,-1,1],[1,-1,-1],
            [1,1,1],[1,-1,1],[-1,1,1],
            [-1,1,1],[1,-1,1],[-1,-1,1],
            [-1,1,-1],[-1,-1,1],[-1,-1,-1],
            [-1,1,-1],[-1,1,1],[1,1,-1],
            [-1,1,1],[1,1,1],[1,1,-1],
            [-1,-1,1],[-1,-1,-1],[1,-1,1],
            [-1,-1,-1],[1,-1,1],[1,-1,-1],
        );
        this.indices.push(0,1,2, 1,2,4, 2,4,8, 4,8,7, 8,7,14, 8,17,14, 17,14,0, 14,0,1, 14,1,7, 1,7,4, 17,0,8, 0,8,2);

    }
}


class Base_Scene extends Scene {
    /**
     *  **Base_scene** is a Scene that can be added to any display canvas.
     *  Setup the shapes, materials, camera, and lighting here.
     */
    constructor() {
        // constructor(): Scenes begin by populating initial values like the Shapes and Materials they'll need.
        super();
        this.color = [hex_color("#1a9ffa"),hex_color("#1a9ffa"),hex_color("#1a9ffa"),hex_color("#1a9ffa"),hex_color("#1a9ffa"),hex_color("#1a9ffa"),hex_color("#1a9ffa"),hex_color("#1a9ffa")];
        this.hover = this.front_couter_clockwise = this.Right_turn = this.Top_turn = false;
        this.pass = true;
        // At the beginning of our program, load one of each of these shape definitions onto the GPU.
        this.shapes = {
            'cube': new Cube(),
            'outline': new Cube_Outline(),
            'strip': new Cube_Single_Strip(),
        };

        // *** Materials
        this.materials = {
            plastic: new Material(new defs.Phong_Shader(),
                {ambient: .4, diffusivity: .6, color: hex_color("#ffffff")}),
        };
        // The white material and basic shader are used for drawing the outline.
        this.white = new Material(new defs.Basic_Shader());
    }

    display(context, program_state) {
        // display():  Called once per frame of animation. Here, the base class's display only does
        // some initial setup.

        // Setup -- This part sets up the scene's overall camera matrix, projection matrix, and lights:
        if (!context.scratchpad.controls) {
            this.children.push(context.scratchpad.controls = new defs.Movement_Controls());
            // Define the global camera and projection matrices, which are stored in program_state.
            program_state.set_camera(Mat4.translation(0, 0, -30));
        }
        program_state.projection_transform = Mat4.perspective(
            Math.PI / 4, context.width / context.height, 1, 100);

        // *** Lights: *** Values of vector or point lights.
        const light_position = vec4(0, 5, 5, 1);
        program_state.lights = [new Light(light_position, color(1, 1, 1, 1), 1000)];
    }
}

export class Assignment2 extends Base_Scene {
    /**
     * This Scene object can be added to any display canvas.
     * We isolate that code so it can be experimented with on its own.
     * This gives you a very small code sandbox for editing a simple scene, and for
     * experimenting with matrix transformations.
     */
    constructor() {
        super();
        this.set_colors();
        this.angle = 0;
        this.direction = 1;
        this.cube_matrix=[
            Mat4.translation(-2,2,0), Mat4.translation(0,2,0), Mat4.translation(2,2,0),
            Mat4.translation(-2,0,0), Mat4.identity(), Mat4.translation(2,0,0),
            Mat4.translation(-2,-2,0), Mat4.translation(0,-2,0), Mat4.translation(2,-2,0),

            Mat4.translation(-2,2,-2), Mat4.translation(0,2,-2), Mat4.translation(2,2,-2),
            Mat4.translation(-2,0,-2), Mat4.translation(0,0,-2), Mat4.translation(2,0,-2),
            Mat4.translation(-2,-2,-2), Mat4.translation(0,-2,-2), Mat4.translation(2,-2,-2),

            Mat4.translation(-2,2,-4), Mat4.translation(0,2,-4), Mat4.translation(2,2,-4),
            Mat4.translation(-2,0,-4), Mat4.translation(0,0,-4), Mat4.translation(2,0,-4),
            Mat4.translation(-2,-2,-4), Mat4.translation(0,-2,-4), Mat4.translation(2,-2,-4)
        ];
        this.cube_coordinate_status=[
            [[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],
            [[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],
            [[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],

            [[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],
            [[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],
            [[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],

            [[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],
            [[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],
            [[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],[[1,0,0,4],[0,1,0,2],[0,0,1,0],[-1,0,0,4],[0,-1,0,2],[0,0,-1,0]],
        ];
        //z,y,x
        this.cube_recenter = [
            [Mat4.translation(2,-2,0),Mat4.translation(-2,2,0),Mat4.translation(2,0,-2),Mat4.translation(-2,0,2),Mat4.translation(0,-2,-2),Mat4.translation(0,2,2)],//0
            [Mat4.translation(0,-2,0),Mat4.translation(0,2,0),Mat4.translation(0,0,-2),Mat4.translation(0,0,2),Mat4.translation(0,-2,-2),Mat4.translation(0,2,2)],//1
            [Mat4.translation(-2,-2,0),Mat4.translation(2,2,0),Mat4.translation(-2,0,-2),Mat4.translation(2,0,2),Mat4.translation(0,-2,-2),Mat4.translation(0,2,2)],//2

            [Mat4.translation(2,0,0),Mat4.translation(-2,0,0),Mat4.translation(2,0,-2),Mat4.translation(-2,0,2),Mat4.translation(0,0,-2),Mat4.translation(0,0,2)],//3
            [Mat4.translation(0,0,0),Mat4.translation(0,0,0),Mat4.translation(0,0,0),Mat4.translation(0,0,0),Mat4.translation(0,0,-2),Mat4.translation(0,0,2)],//4
            [Mat4.translation(-2,0,0),Mat4.translation(2,0,0),Mat4.translation(-2,0,-2),Mat4.translation(2,0,2),Mat4.translation(0,0,-2),Mat4.translation(0,0,2)],//5

            [Mat4.translation(2,2,0),Mat4.translation(-2,-2,0),Mat4.translation(2,0,-2),Mat4.translation(-2,0,2),Mat4.translation(0,2,-2),Mat4.translation(0,-2,2)],//6
            [Mat4.translation(0,2,0),Mat4.translation(0,-2,0),Mat4.translation(0,0,-2),Mat4.translation(0,0,2),Mat4.translation(0,2,-2),Mat4.translation(0,-2,2)],//7
            [Mat4.translation(-2,2,0),Mat4.translation(2,-2,0),Mat4.translation(-2,0,-2),Mat4.translation(2,0,2),Mat4.translation(0,2,-2),Mat4.translation(0,-2,2)],//8

            [Mat4.translation(2,-2,0),Mat4.translation(-2,2,0),Mat4.translation(2,0,0),Mat4.translation(-2,0,0),Mat4.translation(0,-2,0),Mat4.translation(0,2,0)],//9
            [Mat4.translation(0,0,0),Mat4.translation(0,0,0),Mat4.translation(0,0,0),Mat4.translation(0,0,0),Mat4.translation(0,0,0),Mat4.translation(0,0,0)],//10
            [Mat4.translation(-2,-2,0),Mat4.translation(2,2,0),Mat4.translation(-2,0,0),Mat4.translation(2,0,0),Mat4.translation(0,-2,0),Mat4.translation(0,2,0)],//11

            [Mat4.translation(2,0,0),Mat4.translation(-2,0,0),Mat4.translation(2,0,0),Mat4.translation(-2,0,0),Mat4.translation(0,0,0),Mat4.translation(0,0,0)],//12
            [Mat4.translation(0,0,0),Mat4.translation(0,0,0),Mat4.translation(0,0,0),Mat4.translation(0,0,0),Mat4.translation(0,0,0),Mat4.translation(0,0,0)],//13
            [Mat4.translation(-2,0,0),Mat4.translation(2,0,0),Mat4.translation(-2,0,0),Mat4.translation(2,0,0),Mat4.translation(0,0,0),Mat4.translation(0,0,0)],//14

            [Mat4.translation(2,2,0),Mat4.translation(-2,-2,0),Mat4.translation(2,0,0),Mat4.translation(-2,0,0),Mat4.translation(0,2,0),Mat4.translation(0,-2,0)],//15
            [Mat4.translation(0,2,0),Mat4.translation(0,-2,0),Mat4.translation(0,0,0),Mat4.translation(0,0,0),Mat4.translation(0,2,0),Mat4.translation(0,-2,0)],//16
            [Mat4.translation(-2,2,0),Mat4.translation(2,-2,0),Mat4.translation(-2,0,0),Mat4.translation(2,0,0),Mat4.translation(0,2,0),Mat4.translation(0,-2,0)],//17

            [Mat4.translation(2,-2,0),Mat4.translation(-2,2,0),Mat4.translation(2,0,2),Mat4.translation(-2,0,-2),Mat4.translation(0,-2,2),Mat4.translation(0,2,-2)],//18
            [Mat4.translation(0,-2,0),Mat4.translation(0,2,0),Mat4.translation(0,0,2),Mat4.translation(0,0,-2),Mat4.translation(0,-2,2),Mat4.translation(0,2,-2)],//19
            [Mat4.translation(-2,-2,0),Mat4.translation(2,2,0),Mat4.translation(-2,0,2),Mat4.translation(2,0,-2),Mat4.translation(0,-2,2),Mat4.translation(0,2,-2)],//20

            [Mat4.translation(2,0,0),Mat4.translation(-2,0,0),Mat4.translation(2,0,2),Mat4.translation(-2,0,-2),Mat4.translation(0,0,2),Mat4.translation(0,0,-2)],//21
            [Mat4.translation(0,0,0),Mat4.translation(0,0,0),Mat4.translation(0,0,2),Mat4.translation(0,0,-2),Mat4.translation(0,0,2),Mat4.translation(0,0,-2)],//22
            [Mat4.translation(-2,0,0),Mat4.translation(2,0,0),Mat4.translation(-2,0,2),Mat4.translation(2,0,-2),Mat4.translation(0,0,2),Mat4.translation(0,0,-2)],//23

            [Mat4.translation(2,2,0),Mat4.translation(-2,-2,0),Mat4.translation(2,0,2),Mat4.translation(-2,0,-2),Mat4.translation(0,2,2),Mat4.translation(0,-2,-2)],//24
            [Mat4.translation(0,2,0),Mat4.translation(0,-2,0),Mat4.translation(0,0,2),Mat4.translation(0,0,-2),Mat4.translation(0,2,2),Mat4.translation(0,-2,-2)],//25
            [Mat4.translation(-2,2,0),Mat4.translation(2,-2,0),Mat4.translation(-2,0,2),Mat4.translation(2,0,-2),Mat4.translation(0,2,2),Mat4.translation(0,-2,-2)],//26
        ];
        this.cube_index=[
            0,1,2,
            3,4,5,
            6,7,8,

            9,10,11,
            12,13,14,
            15,16,17,

            18,19,20,
            21,22,23,
            24,25,26
        ];
        this.randomColor = [color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0),
            color(Math.random(), Math.random(), Math.random(), 1.0)];
    }
    set_colors() {
        for(let i =0; i < 8; i++){
            this.color[i] = color(Math.random(), Math.random(), Math.random(), 1.0);
        }
    }

    make_control_panel() {
        // Draw the scene's buttons, setup their actions and keyboard shortcuts, and monitor live measurements.
        this.key_triggered_button("Change Colors", ["c"], this.set_colors);
        // Add a button for controlling the scene.
        this.key_triggered_button("Turn left", ["o"], () => {
            this.front_couter_clockwise = !this.front_couter_clockwise;
            this.pass = !this.pass;
        });
        this.key_triggered_button("Turn right", ["o"], () => {
            this.direction = -1;
            this.front_couter_clockwise = !this.front_couter_clockwise;
            this.pass = !this.pass;
        });
        this.key_triggered_button("Top turn left", ["o"], () => {
            this.direction = -1;
            this.Top_turn = !this.Top_turn;
            this.pass = !this.pass;
        });
        this.key_triggered_button("Top turn right", ["o"], () => {
            this.Top_turn = !this.Top_turn;
            this.pass = !this.pass;
        });
        this.key_triggered_button("Left turn down", ["o"], () => {
            this.direction = -1;
            this.front_couter_clockwise = !this.front_couter_clockwise;
            this.pass = !this.pass;
        });
        this.key_triggered_button("Left turn up", ["o"], () => {
            this.front_couter_clockwise = !this.front_couter_clockwise;
            this.pass = !this.pass;
        });
        this.key_triggered_button("Right turn down", ["o"], () => {
            this.Right_turn = !this.Right_turn;
            this.direction = -1;
            this.pass = !this.pass;
        });
        this.key_triggered_button("Right turn up", ["o"], () => {
            this.Right_turn = !this.Right_turn;
            this.pass = !this.pass;
        });
        this.key_triggered_button("Sit still", ["m"], () => {
            this.hover =! this.hover;
        });
    }


    display(context, program_state) {
        super.display(context, program_state);
        const blue = hex_color("#1a9ffa"), yellow = hex_color("#fdc03a");
        let model_transform = Mat4.identity();

        /*Requirement 3*/
        // TODO:  Draw your entire scene here.  Use this.draw_box( graphics_state, model_transform ) to call your helper.

        let t = program_state.animation_time/1000; //ms->s
        let dt = program_state.animation_delta_time/1000;
        if(this.hover){
            t = Math.PI/2;
        }
        let tr = Mat4.translation(1,1.5,0);
        let rotation = Mat4.rotation((Math.sin(t)+1)*Math.PI*0.025, 0, 0, 1);
        let tr2 = Mat4.translation(-1,-1.5,0);
        let tr3 = Mat4.translation(0,3,0);
        let sc = Mat4.scale(1,1.5,1);
        let prev = Mat4.identity();
        //let angle = this.angle = 0.25*Math.PI*(Math.sin((2*Math.PI/1)*program_state.animation_time / 1000)+1);
        //let angle = this.angle = this.angle+0.25*Math.PI*(program_state.animation_delta_time / 1000);

        let degree = 0;

        if (this.front_couter_clockwise){
            let needed_index=[0,1,2,3,4,5,6,7,8];
            this.angle = this.angle+0.25*Math.PI*(program_state.animation_delta_time / 1000);
            if (this.angle > 0.4999*Math.PI) {
                this.angle = Math.PI*0.5;
            }
            let c=[Mat4.identity(),Mat4.identity(),Mat4.identity(),Mat4.identity(),Mat4.identity(),Mat4.identity(),Mat4.identity(),Mat4.identity(),Mat4.identity()];

            for (let i=0; i < 9; i++){
                let cube=this.cube_index[needed_index[i]];
                let x=this.cube_coordinate_status[cube][2][0],y=this.cube_coordinate_status[cube][2][1],z=this.cube_coordinate_status[cube][2][2];
                let ro = Mat4.rotation(this.angle * this.direction, x, y, z);
                c[i] = this.cube_matrix[cube];
                c[i] = c[i].times(this.cube_recenter[cube][this.cube_coordinate_status[cube][2][3]]);
                c[i] = c[i].times(ro).times(this.cube_recenter[cube][this.cube_coordinate_status[cube][2][3]+1]);
                this.shapes.cube.draw(context, program_state, c[i], this.materials.plastic.override({color: this.randomColor[cube]}));
                //this.cube_matrix[cube]=c[i];
            }

            for (let i = 0; i < 27; i++ ){
                if (! needed_index.includes(i,0)){
                    this.shapes.cube.draw(context, program_state, this.cube_matrix[this.cube_index[i]], this.materials.plastic.override({color: this.randomColor[this.cube_index[i]]}));
                }
            }

            if (this.angle == 0.5*Math.PI) {
                this.front_couter_clockwise = !this.front_couter_clockwise;
                this.pass = !this.pass;
                let cube=[1,1,1,1,1,1,1,1,1];

                for (let i=0;i < 9; i++){
                    cube[i] = this.cube_index[needed_index[i]];
                    this.cube_matrix[cube[i]]=c[i];
                    let x_coordinate = this.cube_coordinate_status[cube[i]][0],y_coordinate = this.cube_coordinate_status[cube[i]][1],
                        x_negative_coordinate = this.cube_coordinate_status[cube[i]][3],y_negative_coordinate = this.cube_coordinate_status[cube[i]][4];
                    this.cube_coordinate_status[cube[i]][0] = y_negative_coordinate;
                    this.cube_coordinate_status[cube[i]][1] = x_coordinate;
                    this.cube_coordinate_status[cube[i]][3] = y_coordinate;
                    this.cube_coordinate_status[cube[i]][4] = x_negative_coordinate;
                }

                this.cube_index[0]=cube[2];
                this.cube_index[1]=cube[5];
                this.cube_index[2]=cube[8];
                this.cube_index[3]=cube[1];
                this.cube_index[4]=cube[4];
                this.cube_index[5]=cube[7];
                this.cube_index[6]=cube[0];
                this.cube_index[7]=cube[3];
                this.cube_index[8]=cube[6];

                this.angle = 0;
                this.direction = 1;
            }
        }

        if (this.Top_turn) {
            let needed_index = [0, 1, 2, 9, 10, 11, 18, 19, 20];
            this.angle = this.angle + 0.25 * Math.PI * (program_state.animation_delta_time / 1000);
            if (this.angle > 0.4999*Math.PI) {
                this.angle = Math.PI*0.5;
            }
            let c = [Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity()];

            for (let i = 0; i < 9; i++) {
                let cube = this.cube_index[needed_index[i]];
                let x = this.cube_coordinate_status[cube][1][0], y = this.cube_coordinate_status[cube][1][1], z = this.cube_coordinate_status[cube][1][2];
                let ro = Mat4.rotation(this.angle * this.direction, x, y, z);
                c[i] = this.cube_matrix[cube];
                c[i] = c[i].times(this.cube_recenter[cube][this.cube_coordinate_status[cube][1][3]]);
                c[i] = c[i].times(ro).times(this.cube_recenter[cube][this.cube_coordinate_status[cube][1][3] + 1]);
                this.shapes.cube.draw(context, program_state, c[i], this.materials.plastic.override({color: this.randomColor[cube]}));
                //this.cube_matrix[cube]=c[i];
            }

            for (let i = 0; i < 27; i++ ){
                if (! needed_index.includes(i,0)){
                    this.shapes.cube.draw(context, program_state, this.cube_matrix[this.cube_index[i]], this.materials.plastic.override({color: this.randomColor[this.cube_index[i]]}));
                }
            }

            if (this.angle == 0.5*Math.PI) {
                this.Top_turn = !this.Top_turn;
                this.pass = !this.pass;
                let cube=[1,1,1,1,1,1,1,1,1];

                for (let i=0;i < 9; i++){
                    cube[i] = this.cube_index[needed_index[i]];
                    this.cube_matrix[cube[i]]=c[i];
                    let x_coordinate = this.cube_coordinate_status[cube[i]][0],z_coordinate = this.cube_coordinate_status[cube[i]][2],
                        x_negative_coordinate = this.cube_coordinate_status[cube[i]][3],z_negative_coordinate = this.cube_coordinate_status[cube[i]][5];
                    this.cube_coordinate_status[cube[i]][0] = z_negative_coordinate;
                    this.cube_coordinate_status[cube[i]][3] = z_coordinate;
                    this.cube_coordinate_status[cube[i]][2] = x_coordinate;
                    this.cube_coordinate_status[cube[i]][5] = x_negative_coordinate;
                }

                this.cube_index[0]=cube[2];
                this.cube_index[1]=cube[5];
                this.cube_index[2]=cube[8];
                this.cube_index[9]=cube[1];
                this.cube_index[10]=cube[4];
                this.cube_index[11]=cube[7];
                this.cube_index[18]=cube[0];
                this.cube_index[19]=cube[3];
                this.cube_index[20]=cube[6];

                this.angle = 0;
                this.direction = 1;
            }
        }


        if (this.pass){
            for (let i = 0; i < 27; i++ ){
                this.shapes.cube.draw(context, program_state, this.cube_matrix[this.cube_index[i]], this.materials.plastic.override({color: this.randomColor[this.cube_index[i]]}));
            }
        }
    }
}