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
        this.cube_color = [[color(1,1,0,1),color(0,1,1,1),color(1,0,1,1)], //0
            [color(1,0,1,1),color(0,1,1,1),color(1,0,1,1)],//1
            [color(0,0,0,1),color(0,1,1,1),color(1,0,1,1)],//2
            [color(1,1,0,1),color(0,1,1,1),color(0,1,1,1)],//3
            [color(0,1,1,1),color(0,1,1,1),color(0,1,1,1)],//4
            [color(0,0,0,1),color(0,1,1,1),color(0,1,1,1)],//5
            [color(1,1,0,1),color(0,1,1,1),color(0,1,0,1)],//6
            [color(0,1,0,1),color(0,1,1,1),color(0,1,1,1)],//7
            [color(0,0,0,1),color(0,1,1,1),color(0,1,0,1)],//8
            [color(1,0,1,1),color(1,1,0,1),color(0,1,1,1)],//9
            [color(1,0,1,1),color(0,1,1,1),color(0,1,1,1)],//10
            [color(1,0,1,1),color(0,0,0,1),color(0,0,0,1)],//11
            [color(1,1,0,1),color(0,1,1,1),color(0,1,1,1)],//12
            [color(1,1,0,1),color(0,1,1,1),color(0,1,1,1)],//13
            [color(0,0,0,1),color(0,1,1,1),color(0,1,1,1)],//14
            [color(0,1,0,1),color(1,1,0,1),color(0,1,1,1)],//15
            [color(0,1,0,1),color(0,1,1,1),color(0,1,1,1)],//16
            [color(0,1,0,1),color(0,0,0,1),color(0,0,0,1)],//17
            [color(1,1,0,1),color(1,0,0,1),color(1,0,1,1)],//18
            [color(1,0,1,1),color(1,0,0,1),color(1,0,1,1)],//19
            [color(0,0,0,1),color(1,0,0,1),color(1,0,1,1)],//20
            [color(1,1,0,1),color(1,0,0,1),color(0,1,1,1)],//21
            [color(1,0,0,1),color(0,1,1,1),color(0,1,1,1)],//22
            [color(0,0,0,1),color(1,0,0,1),color(0,1,1,1)],//23
            [color(1,1,0,1),color(1,0,0,1),color(0,1,0,1)],//24
            [color(0,1,0,1),color(1,0,0,1),color(0,1,1,1)],//25
            [color(0,0,0,1),color(1,0,0,1),color(0,1,0,1)]//26
        ];
        this.c0_tl = [Mat4.translation(-3,2,0),Mat4.translation(-2,2,1),Mat4.translation(-2,3,0)];
        this.c0_tsc = [Mat4.scale(0.001,0.9,0.9),Mat4.scale(0.9,0.9,0.001),Mat4.scale(0.9,0.001,0.9)];

        this.c1_tl = [Mat4.translation(0,3,0), Mat4.translation(0,2,1)];
        this.c1_tsc = [Mat4.scale(0.9,0.001,0.9),Mat4.scale(0.9,0.9,0.001)];

        this.c2_tl = [Mat4.translation(3,2,0),Mat4.translation(2,2,1),Mat4.translation(2,3,0)];
        this.c2_tsc = [Mat4.scale(0.001,0.9,0.9),Mat4.scale(0.9,0.9,0.001),Mat4.scale(0.9,0.001,0.9)];

        this.c3_tl = [Mat4.translation(-3,0,0),Mat4.translation(-2,0,1)];
        this.c3_tsc = [Mat4.scale(0.001,0.9,0.9),Mat4.scale(0.9,0.9,0.001)];

        this.c4_tl = [Mat4.translation(0,0,1)];
        this.c4_tsc = [Mat4.scale(0.9,0.9,0.001)];

        this.c5_tl = [Mat4.translation(3,0,0),Mat4.translation(2,0,1)];
        this.c5_tsc = [Mat4.scale(0.001,0.9,0.9),Mat4.scale(0.9,0.9,0.001)];

        this.c6_tl = [Mat4.translation(-3,-2,0),Mat4.translation(-2,-2,1),Mat4.translation(-2,-3,0)];
        this.c6_tsc = [Mat4.scale(0.001,0.9,0.9),Mat4.scale(0.9,0.9,0.001),Mat4.scale(0.9,0.001,0.9)];

        this.c7_tl = [Mat4.translation(0,-3,0),Mat4.translation(0,-2,1)];
        this.c7_tsc = [Mat4.scale(0.9,0.001,0.9),Mat4.scale(0.9,0.9,0.001)];

        this.c8_tl = [Mat4.translation(3,-2,0),Mat4.translation(2,-2,1),Mat4.translation(2,-3,0)];
        this.c8_tsc = [Mat4.scale(0.001,0.9,0.9),Mat4.scale(0.9,0.9,0.001),Mat4.scale(0.9,0.001,0.9)];

        this.c9_tl = [Mat4.translation(-2,3,-2),Mat4.translation(-3,2,-2)];
        this.c9_tsc = [Mat4.scale(0.9,0.001,0.9),Mat4.scale(0.001,0.9,0.9)];

        this.c10_tl = [Mat4.translation(0,3,-2)];
        this.c10_tsc = [Mat4.scale(0.9,0.001,0.9)];

        this.c11_tl = [Mat4.translation(2,3,-2),Mat4.translation(3,2,-2)];
        this.c11_tsc = [Mat4.scale(0.9,0.001,0.9),Mat4.scale(0.001,0.9,0.9)];

        this.c12_tl = [Mat4.translation(-3,0,-2)];
        this.c12_tsc = [Mat4.scale(0.001,0.9,0.9)];

        this.c14_tl = [Mat4.translation(3,0,-2)];
        this.c14_tsc = [Mat4.scale(0.001,0.9,0.9)];

        this.c15_tl = [Mat4.translation(-2,-3,-2),Mat4.translation(-3,-2,-2)];
        this.c15_tsc = [Mat4.scale(0.9,0.001,0.9),Mat4.scale(0.001,0.9,0.9)];

        this.c16_tl = [Mat4.translation(0,-3,-2)];
        this.c16_tsc = [Mat4.scale(0.9,0.001,0.9)];

        this.c17_tl = [Mat4.translation(2,-3,-2),Mat4.translation(3,-2,-2)];
        this.c17_tsc = [Mat4.scale(0.9,0.001,0.9),Mat4.scale(0.001,0.9,0.9)];

        this.c18_tl = [Mat4.translation(-3,2,-4),Mat4.translation(-2,2,-5),Mat4.translation(-2,3,-4)];
        this.c18_tsc = [Mat4.scale(0.001,0.9,0.9),Mat4.scale(0.9,0.9,0.001),Mat4.scale(0.9,0.001,0.9)];

        this.c19_tl = [Mat4.translation(0,3,-4),Mat4.translation(0,2,-5)];
        this.c19_tsc = [Mat4.scale(0.9,0.001,0.9),Mat4.scale(0.9,0.9,0.001)];

        this.c20_tl = [Mat4.translation(3,2,-4),Mat4.translation(2,2,-5),Mat4.translation(2,3,-4)];
        this.c20_tsc = [Mat4.scale(0.001,0.9,0.9),Mat4.scale(0.9,0.9,0.001),Mat4.scale(0.9,0.001,0.9)];

        this.c21_tl = [Mat4.translation(-3,0,-4),Mat4.translation(-2,0,-5)];
        this.c21_tsc = [Mat4.scale(0.001,0.9,0.9),Mat4.scale(0.9,0.9,0.001)];

        this.c22_tl = [Mat4.translation(0,0,-5)];
        this.c22_tsc = [Mat4.scale(0.9,0.9,0.001)];

        this.c23_tl = [Mat4.translation(3,0,-4),Mat4.translation(2,0,-5)];
        this.c23_tsc = [Mat4.scale(0.001,0.9,0.9),Mat4.scale(0.9,0.9,0.001)];

        this.c24_tl = [Mat4.translation(-3,-2,-4),Mat4.translation(-2,-2,-5),Mat4.translation(-2,-3,-4)];
        this.c24_tsc = [Mat4.scale(0.001,0.9,0.9),Mat4.scale(0.9,0.9,0.001),Mat4.scale(0.9,0.001,0.9)];

        this.c25_tl = [Mat4.translation(0,-3,-4),Mat4.translation(0,-2,-5)];
        this.c25_tsc = [Mat4.scale(0.9,0.001,0.9),Mat4.scale(0.9,0.9,0.001)];

        this.c26_tl = [Mat4.translation(3,-2,-4),Mat4.translation(2,-2,-5),Mat4.translation(2,-3,-4)];
        this.c26_tsc = [Mat4.scale(0.001,0.9,0.9),Mat4.scale(0.9,0.9,0.001),Mat4.scale(0.9,0.001,0.9)];

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
        this.key_triggered_button("Front Turn left", ["o"], () => {
            this.front_couter_clockwise = !this.front_couter_clockwise;
            this.pass = !this.pass;
        });
        this.key_triggered_button("Front Turn right", ["o"], () => {
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
            this.Left_turn = !this.Left_turn;
            this.pass = !this.pass;
        });
        this.key_triggered_button("Left turn up", ["o"], () => {
            this.direction = -1;
            this.Left_turn = !this.Left_turn;
            this.pass = !this.pass;
        });

        this.key_triggered_button("Right turn down", ["o"], () => {
            this.Right_turn = !this.Right_turn;
            this.pass = !this.pass;
        });
        this.key_triggered_button("Right turn up", ["o"], () => {
            this.direction = -1;
            this.Right_turn = !this.Right_turn;
            this.pass = !this.pass;
        });

        this.key_triggered_button("Sit still", ["m"], () => {
            this.hover =! this.hover;
        });
    }
    front_rotation_texture(context, program_state, direction) {
        let ro = Mat4.rotation(this.angle, 0, 0, direction);
        //rendering corner texture
        for (let i = 0; i < 3; i++) {
            this.shapes.cube.draw(context, program_state, ro.times(this.c0_tl[i]).times(this.c0_tsc[i]), this.materials.plastic.override({color: this.cube_color[0][i]}));
            this.shapes.cube.draw(context, program_state, ro.times(this.c2_tl[i]).times(this.c2_tsc[i]), this.materials.plastic.override({color: this.cube_color[2][i]}));
            this.shapes.cube.draw(context, program_state, ro.times(this.c6_tl[i]).times(this.c6_tsc[i]), this.materials.plastic.override({color: this.cube_color[6][i]}));
            this.shapes.cube.draw(context, program_state, ro.times(this.c8_tl[i]).times(this.c8_tsc[i]), this.materials.plastic.override({color: this.cube_color[8][i]}));
            /*this.shapes.cube.draw(context, program_state,ro.times(this.c18_tl[i]).times(this.c18_tsc[i]), this.materials.plastic.override({color: this.cube_color[18][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c20_tl[i]).times(this.c20_tsc[i]), this.materials.plastic.override({color: this.cube_color[20][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c24_tl[i]).times(this.c24_tsc[i]), this.materials.plastic.override({color: this.cube_color[24][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c26_tl[i]).times(this.c26_tsc[i]), this.materials.plastic.override({color: this.cube_color[26][i]}) );*/
        }
        //rendering center texture
        this.shapes.cube.draw(context, program_state, ro.times(this.c4_tl[0]).times(this.c4_tsc[0]), this.materials.plastic.override({color: this.cube_color[4][0]}));
        /*this.shapes.cube.draw(context, program_state,ro.times(this.c10_tl[0]).times(this.c10_tsc[0]), this.materials.plastic.override({color: this.cube_color[10][0]}));
        this.shapes.cube.draw(context, program_state,ro.times(this.c12_tl[0]).times(this.c12_tsc[0]), this.materials.plastic.override({color: this.cube_color[12][0]}));
        this.shapes.cube.draw(context, program_state,ro.times(this.c14_tl[0]).times(this.c14_tsc[0]), this.materials.plastic.override({color: this.cube_color[14][0]}));
        this.shapes.cube.draw(context, program_state,ro.times(this.c16_tl[0]).times(this.c16_tsc[0]), this.materials.plastic.override({color: this.cube_color[16][0]}));
        this.shapes.cube.draw(context, program_state,ro.times(this.c22_tl[0]).times(this.c22_tsc[0]), this.materials.plastic.override({color: this.cube_color[22][0]}));*/
        //rendering edge texture
        for (let i = 0; i < 2; i++) {
            this.shapes.cube.draw(context, program_state, ro.times(this.c1_tl[i]).times(this.c1_tsc[i]), this.materials.plastic.override({color: this.cube_color[1][i]}));
            this.shapes.cube.draw(context, program_state, ro.times(this.c3_tl[i]).times(this.c3_tsc[i]), this.materials.plastic.override({color: this.cube_color[3][i]}));
            this.shapes.cube.draw(context, program_state, ro.times(this.c5_tl[i]).times(this.c5_tsc[i]), this.materials.plastic.override({color: this.cube_color[5][i]}));
            this.shapes.cube.draw(context, program_state, ro.times(this.c7_tl[i]).times(this.c7_tsc[i]), this.materials.plastic.override({color: this.cube_color[7][i]}));
            /*this.shapes.cube.draw(context, program_state,ro.times(this.c9_tl[i]).times(this.c9_tsc[i]), this.materials.plastic.override({color: this.cube_color[9][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c11_tl[i]).times(this.c11_tsc[i]), this.materials.plastic.override({color: this.cube_color[11][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c15_tl[i]).times(this.c15_tsc[i]), this.materials.plastic.override({color: this.cube_color[15][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c17_tl[i]).times(this.c17_tsc[i]), this.materials.plastic.override({color: this.cube_color[17][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c19_tl[i]).times(this.c19_tsc[i]), this.materials.plastic.override({color: this.cube_color[19][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c21_tl[i]).times(this.c21_tsc[i]), this.materials.plastic.override({color: this.cube_color[21][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c23_tl[i]).times(this.c23_tsc[i]), this.materials.plastic.override({color: this.cube_color[23][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c25_tl[i]).times(this.c25_tsc[i]), this.materials.plastic.override({color: this.cube_color[25][i]}) );*/
        }
        //end
        //rendering textures that don't turn
        //rendering corner cube texture
        for(let i=0; i<3; i++){
            this.shapes.cube.draw(context, program_state,this.c18_tl[i].times(this.c18_tsc[i]), this.materials.plastic.override({color: this.cube_color[18][i]}) );
            this.shapes.cube.draw(context, program_state,this.c20_tl[i].times(this.c20_tsc[i]), this.materials.plastic.override({color: this.cube_color[20][i]}) );
            this.shapes.cube.draw(context, program_state,this.c24_tl[i].times(this.c24_tsc[i]), this.materials.plastic.override({color: this.cube_color[24][i]}) );
            this.shapes.cube.draw(context, program_state,this.c26_tl[i].times(this.c26_tsc[i]), this.materials.plastic.override({color: this.cube_color[26][i]}) );
        }
        //rendering middle cube texture
        this.shapes.cube.draw(context, program_state,this.c10_tl[0].times(this.c10_tsc[0]), this.materials.plastic.override({color: this.cube_color[10][0]}));
        this.shapes.cube.draw(context, program_state,this.c12_tl[0].times(this.c12_tsc[0]), this.materials.plastic.override({color: this.cube_color[12][0]}));
        this.shapes.cube.draw(context, program_state,this.c14_tl[0].times(this.c14_tsc[0]), this.materials.plastic.override({color: this.cube_color[14][0]}));
        this.shapes.cube.draw(context, program_state,this.c16_tl[0].times(this.c16_tsc[0]), this.materials.plastic.override({color: this.cube_color[16][0]}));
        this.shapes.cube.draw(context, program_state,this.c22_tl[0].times(this.c22_tsc[0]), this.materials.plastic.override({color: this.cube_color[22][0]}));
        //rendering edge cube texture
        for(let i=0; i<2; i++){
            this.shapes.cube.draw(context, program_state,this.c9_tl[i].times(this.c9_tsc[i]), this.materials.plastic.override({color: this.cube_color[9][i]}) );
            this.shapes.cube.draw(context, program_state,this.c11_tl[i].times(this.c11_tsc[i]), this.materials.plastic.override({color: this.cube_color[11][i]}) );
            this.shapes.cube.draw(context, program_state,this.c15_tl[i].times(this.c15_tsc[i]), this.materials.plastic.override({color: this.cube_color[15][i]}) );
            this.shapes.cube.draw(context, program_state,this.c17_tl[i].times(this.c17_tsc[i]), this.materials.plastic.override({color: this.cube_color[17][i]}) );
            this.shapes.cube.draw(context, program_state,this.c19_tl[i].times(this.c19_tsc[i]), this.materials.plastic.override({color: this.cube_color[19][i]}) );
            this.shapes.cube.draw(context, program_state,this.c21_tl[i].times(this.c21_tsc[i]), this.materials.plastic.override({color: this.cube_color[21][i]}) );
            this.shapes.cube.draw(context, program_state,this.c23_tl[i].times(this.c23_tsc[i]), this.materials.plastic.override({color: this.cube_color[23][i]}) );
            this.shapes.cube.draw(context, program_state,this.c25_tl[i].times(this.c25_tsc[i]), this.materials.plastic.override({color: this.cube_color[25][i]}) );
        }
    }
    front_rotation_texture_update(direction){
        /*update texture location */
        let temp1 = this.cube_color[0];
        let temp2 = this.cube_color[2];
        let temp3 = this.cube_color[6];
        let temp4 = this.cube_color[8];
        if(direction == 1){
            this.cube_color[0] =  temp2;
            let temp = this.cube_color[0][0];
            this.cube_color[0][0] = this.cube_color[0][2];
            this.cube_color[0][2] = temp;

            this.cube_color[2] =  temp4;
            temp = this.cube_color[2][0];
            this.cube_color[2][0] = this.cube_color[2][2];
            this.cube_color[2][2] = temp;

            this.cube_color[6] =  temp1;
            temp = this.cube_color[6][0];
            this.cube_color[6][0] = this.cube_color[6][2];
            this.cube_color[6][2] = temp;

            this.cube_color[8] =  temp3;
            temp = this.cube_color[8][0];
            this.cube_color[8][0] = this.cube_color[8][2];
            this.cube_color[8][2] = temp;

            temp1 = this.cube_color[1];
            temp2 = this.cube_color[3];
            temp3 = this.cube_color[5];
            temp4 = this.cube_color[7];
            this.cube_color[1] = temp3;
            this.cube_color[3]= temp1;
            this.cube_color[5] = temp4;
            this.cube_color[7] = temp2;
        }else{
            this.cube_color[0] =  temp3;
            let temp = this.cube_color[0][0];
            this.cube_color[0][0] = this.cube_color[0][2];
            this.cube_color[0][2] = temp;

            this.cube_color[2] =  temp1;
            temp = this.cube_color[2][0];
            this.cube_color[2][0] = this.cube_color[2][2];
            this.cube_color[2][2] = temp;

            this.cube_color[6] =  temp4;
            temp = this.cube_color[6][0];
            this.cube_color[6][0] = this.cube_color[6][2];
            this.cube_color[6][2] = temp;

            this.cube_color[8] =  temp2;
            temp = this.cube_color[8][0];
            this.cube_color[8][0] = this.cube_color[8][2];
            this.cube_color[8][2] = temp;

            temp1 = this.cube_color[1];
            temp2 = this.cube_color[3];
            temp3 = this.cube_color[5];
            temp4 = this.cube_color[7];
            this.cube_color[1] = temp2;
            this.cube_color[3]= temp4;
            this.cube_color[5] = temp1;
            this.cube_color[7] = temp3;
        }

    }
    top_rotation_texture(context, program_state, direction) {
        let ro = Mat4.translation(0,0,-2).times(Mat4.rotation(this.angle, 0, direction, 0)).times(Mat4.translation(0,0,2));
        //rendering corner texture
        for (let i = 0; i < 3; i++) {
            this.shapes.cube.draw(context, program_state, ro.times(this.c0_tl[i]).times(this.c0_tsc[i]), this.materials.plastic.override({color: this.cube_color[0][i]}));
            this.shapes.cube.draw(context, program_state, ro.times(this.c2_tl[i]).times(this.c2_tsc[i]), this.materials.plastic.override({color: this.cube_color[2][i]}));
            this.shapes.cube.draw(context, program_state,ro.times(this.c18_tl[i]).times(this.c18_tsc[i]), this.materials.plastic.override({color: this.cube_color[18][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c20_tl[i]).times(this.c20_tsc[i]), this.materials.plastic.override({color: this.cube_color[20][i]}) );
        }
        //rendering center texture
        this.shapes.cube.draw(context, program_state,ro.times(this.c10_tl[0]).times(this.c10_tsc[0]), this.materials.plastic.override({color: this.cube_color[10][0]}));
        //rendering edge texture
        for (let i = 0; i < 2; i++) {
            this.shapes.cube.draw(context, program_state, ro.times(this.c1_tl[i]).times(this.c1_tsc[i]), this.materials.plastic.override({color: this.cube_color[1][i]}));
            this.shapes.cube.draw(context, program_state,ro.times(this.c9_tl[i]).times(this.c9_tsc[i]), this.materials.plastic.override({color: this.cube_color[9][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c11_tl[i]).times(this.c11_tsc[i]), this.materials.plastic.override({color: this.cube_color[11][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c19_tl[i]).times(this.c19_tsc[i]), this.materials.plastic.override({color: this.cube_color[19][i]}) );
        }
        //end
        //rendering textures that don't turn
        //rendering corner cube texture
        for(let i=0; i<3; i++){
            this.shapes.cube.draw(context, program_state,this.c6_tl[i].times(this.c6_tsc[i]), this.materials.plastic.override({color: this.cube_color[6][i]}) );
            this.shapes.cube.draw(context, program_state,this.c8_tl[i].times(this.c8_tsc[i]), this.materials.plastic.override({color: this.cube_color[8][i]}) );
            this.shapes.cube.draw(context, program_state,this.c24_tl[i].times(this.c24_tsc[i]), this.materials.plastic.override({color: this.cube_color[24][i]}) );
            this.shapes.cube.draw(context, program_state,this.c26_tl[i].times(this.c26_tsc[i]), this.materials.plastic.override({color: this.cube_color[26][i]}) );
        }
        //rendering middle cube texture
        this.shapes.cube.draw(context, program_state,this.c4_tl[0].times(this.c4_tsc[0]), this.materials.plastic.override({color: this.cube_color[4][0]}));
        this.shapes.cube.draw(context, program_state,this.c12_tl[0].times(this.c12_tsc[0]), this.materials.plastic.override({color: this.cube_color[12][0]}));
        this.shapes.cube.draw(context, program_state,this.c14_tl[0].times(this.c14_tsc[0]), this.materials.plastic.override({color: this.cube_color[14][0]}));
        this.shapes.cube.draw(context, program_state,this.c16_tl[0].times(this.c16_tsc[0]), this.materials.plastic.override({color: this.cube_color[16][0]}));
        this.shapes.cube.draw(context, program_state,this.c22_tl[0].times(this.c22_tsc[0]), this.materials.plastic.override({color: this.cube_color[22][0]}));
        //rendering edge cube texture
        for(let i=0; i<2; i++){
            this.shapes.cube.draw(context, program_state,this.c3_tl[i].times(this.c3_tsc[i]), this.materials.plastic.override({color: this.cube_color[3][i]}) );
            this.shapes.cube.draw(context, program_state,this.c5_tl[i].times(this.c5_tsc[i]), this.materials.plastic.override({color: this.cube_color[5][i]}) );
            this.shapes.cube.draw(context, program_state,this.c7_tl[i].times(this.c7_tsc[i]), this.materials.plastic.override({color: this.cube_color[7][i]}) );
            this.shapes.cube.draw(context, program_state,this.c15_tl[i].times(this.c15_tsc[i]), this.materials.plastic.override({color: this.cube_color[15][i]}) );
            this.shapes.cube.draw(context, program_state,this.c17_tl[i].times(this.c17_tsc[i]), this.materials.plastic.override({color: this.cube_color[17][i]}) );
            this.shapes.cube.draw(context, program_state,this.c21_tl[i].times(this.c21_tsc[i]), this.materials.plastic.override({color: this.cube_color[21][i]}) );
            this.shapes.cube.draw(context, program_state,this.c23_tl[i].times(this.c23_tsc[i]), this.materials.plastic.override({color: this.cube_color[23][i]}) );
            this.shapes.cube.draw(context, program_state,this.c25_tl[i].times(this.c25_tsc[i]), this.materials.plastic.override({color: this.cube_color[25][i]}) );
        }
    }
    top_rotation_texture_update(direction){ //corner: 0 2 18 20; edge: 1 9 11 19
        /*update texture location */
        let temp1 = this.cube_color[0];
        let temp2 = this.cube_color[2];
        let temp3 = this.cube_color[18];
        let temp4 = this.cube_color[20];
        if(direction == 1){
            this.cube_color[0] =  temp3;
            let temp = this.cube_color[0][0];
            this.cube_color[0][0] = this.cube_color[0][1];
            this.cube_color[0][1] = temp;

            this.cube_color[2] =  temp1;
            temp = this.cube_color[2][0];
            this.cube_color[2][0] = this.cube_color[2][1];
            this.cube_color[2][1] = temp;

            this.cube_color[20] =  temp2;
            temp = this.cube_color[20][0];
            this.cube_color[20][0] = this.cube_color[20][1];
            this.cube_color[20][1] = temp;

            this.cube_color[18] =  temp4;
            temp = this.cube_color[18][0];
            this.cube_color[18][0] = this.cube_color[18][1];
            this.cube_color[18][1] = temp;

            temp1 = this.cube_color[1];
            temp2 = this.cube_color[9];
            temp3 = this.cube_color[11];
            temp4 = this.cube_color[19];
            this.cube_color[1] = temp2;
            this.cube_color[9]= temp4;
            this.cube_color[11] = temp1;
            this.cube_color[19] = temp3;
        }else{
            this.cube_color[0] =  temp2;
            let temp = this.cube_color[0][0];
            this.cube_color[0][0] = this.cube_color[0][1];
            this.cube_color[0][1] = temp;

            this.cube_color[2] =  temp4;
            temp = this.cube_color[2][0];
            this.cube_color[2][0] = this.cube_color[2][1];
            this.cube_color[2][1] = temp;

            this.cube_color[20] =  temp3;
            temp = this.cube_color[20][0];
            this.cube_color[20][0] = this.cube_color[20][1];
            this.cube_color[20][1] = temp;

            this.cube_color[18] =  temp1;
            temp = this.cube_color[18][0];
            this.cube_color[18][0] = this.cube_color[18][1];
            this.cube_color[18][1] = temp;

            temp1 = this.cube_color[1];
            temp2 = this.cube_color[9];
            temp3 = this.cube_color[11];
            temp4 = this.cube_color[19];
            this.cube_color[1] = temp3;
            this.cube_color[9]= temp1;
            this.cube_color[11] = temp4;
            this.cube_color[19] = temp2;
        }

    }
    left_rotation_texture(context, program_state, direction) {// 18 0 24 6; 3 9 15 21;
        let ro = Mat4.translation(-2,0,-2).times(Mat4.rotation(this.angle, direction, 0, 0)).times(Mat4.translation(2,0,2));
        //rendering corner texture
        for (let i = 0; i < 3; i++) {
            this.shapes.cube.draw(context, program_state, ro.times(this.c0_tl[i]).times(this.c0_tsc[i]), this.materials.plastic.override({color: this.cube_color[0][i]}));
            this.shapes.cube.draw(context, program_state, ro.times(this.c6_tl[i]).times(this.c6_tsc[i]), this.materials.plastic.override({color: this.cube_color[6][i]}));
            this.shapes.cube.draw(context, program_state,ro.times(this.c18_tl[i]).times(this.c18_tsc[i]), this.materials.plastic.override({color: this.cube_color[18][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c24_tl[i]).times(this.c24_tsc[i]), this.materials.plastic.override({color: this.cube_color[24][i]}) );

        }
        //rendering center texture
        this.shapes.cube.draw(context, program_state,ro.times(this.c12_tl[0]).times(this.c12_tsc[0]), this.materials.plastic.override({color: this.cube_color[12][0]}));
        //rendering edge texture
        for (let i = 0; i < 2; i++) {
            this.shapes.cube.draw(context, program_state, ro.times(this.c3_tl[i]).times(this.c3_tsc[i]), this.materials.plastic.override({color: this.cube_color[3][i]}));
            this.shapes.cube.draw(context, program_state,ro.times(this.c9_tl[i]).times(this.c9_tsc[i]), this.materials.plastic.override({color: this.cube_color[9][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c15_tl[i]).times(this.c15_tsc[i]), this.materials.plastic.override({color: this.cube_color[15][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c21_tl[i]).times(this.c21_tsc[i]), this.materials.plastic.override({color: this.cube_color[21][i]}) );
            /*this.shapes.cube.draw(context, program_state,ro.times(this.c9_tl[i]).times(this.c9_tsc[i]), this.materials.plastic.override({color: this.cube_color[9][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c11_tl[i]).times(this.c11_tsc[i]), this.materials.plastic.override({color: this.cube_color[11][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c15_tl[i]).times(this.c15_tsc[i]), this.materials.plastic.override({color: this.cube_color[15][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c17_tl[i]).times(this.c17_tsc[i]), this.materials.plastic.override({color: this.cube_color[17][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c19_tl[i]).times(this.c19_tsc[i]), this.materials.plastic.override({color: this.cube_color[19][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c21_tl[i]).times(this.c21_tsc[i]), this.materials.plastic.override({color: this.cube_color[21][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c23_tl[i]).times(this.c23_tsc[i]), this.materials.plastic.override({color: this.cube_color[23][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c25_tl[i]).times(this.c25_tsc[i]), this.materials.plastic.override({color: this.cube_color[25][i]}) );*/
        }
        //end
        //rendering textures that don't turn
        //rendering corner cube texture
        for(let i=0; i<3; i++){
            this.shapes.cube.draw(context, program_state,this.c2_tl[i].times(this.c2_tsc[i]), this.materials.plastic.override({color: this.cube_color[2][i]}) );
            this.shapes.cube.draw(context, program_state,this.c8_tl[i].times(this.c8_tsc[i]), this.materials.plastic.override({color: this.cube_color[8][i]}) );
            this.shapes.cube.draw(context, program_state,this.c20_tl[i].times(this.c20_tsc[i]), this.materials.plastic.override({color: this.cube_color[20][i]}) );
            this.shapes.cube.draw(context, program_state,this.c26_tl[i].times(this.c26_tsc[i]), this.materials.plastic.override({color: this.cube_color[26][i]}) );
        }
        //rendering middle cube texture
        this.shapes.cube.draw(context, program_state,this.c10_tl[0].times(this.c10_tsc[0]), this.materials.plastic.override({color: this.cube_color[10][0]}));
        this.shapes.cube.draw(context, program_state,this.c4_tl[0].times(this.c4_tsc[0]), this.materials.plastic.override({color: this.cube_color[4][0]}));
        this.shapes.cube.draw(context, program_state,this.c14_tl[0].times(this.c14_tsc[0]), this.materials.plastic.override({color: this.cube_color[14][0]}));
        this.shapes.cube.draw(context, program_state,this.c16_tl[0].times(this.c16_tsc[0]), this.materials.plastic.override({color: this.cube_color[16][0]}));
        this.shapes.cube.draw(context, program_state,this.c22_tl[0].times(this.c22_tsc[0]), this.materials.plastic.override({color: this.cube_color[22][0]}));
        //rendering edge cube texture
        for(let i=0; i<2; i++){
            this.shapes.cube.draw(context, program_state,this.c1_tl[i].times(this.c1_tsc[i]), this.materials.plastic.override({color: this.cube_color[1][i]}) );
            this.shapes.cube.draw(context, program_state,this.c11_tl[i].times(this.c11_tsc[i]), this.materials.plastic.override({color: this.cube_color[11][i]}) );
            this.shapes.cube.draw(context, program_state,this.c7_tl[i].times(this.c7_tsc[i]), this.materials.plastic.override({color: this.cube_color[7][i]}) );
            this.shapes.cube.draw(context, program_state,this.c17_tl[i].times(this.c17_tsc[i]), this.materials.plastic.override({color: this.cube_color[17][i]}) );
            this.shapes.cube.draw(context, program_state,this.c19_tl[i].times(this.c19_tsc[i]), this.materials.plastic.override({color: this.cube_color[19][i]}) );
            this.shapes.cube.draw(context, program_state,this.c5_tl[i].times(this.c5_tsc[i]), this.materials.plastic.override({color: this.cube_color[5][i]}) );
            this.shapes.cube.draw(context, program_state,this.c23_tl[i].times(this.c23_tsc[i]), this.materials.plastic.override({color: this.cube_color[23][i]}) );
            this.shapes.cube.draw(context, program_state,this.c25_tl[i].times(this.c25_tsc[i]), this.materials.plastic.override({color: this.cube_color[25][i]}) );
        }
    }
    left_rotation_texture_update(direction){ // 18 0 24 6; 3 9 15 21;
        /*update texture location */
        let temp1 = this.cube_color[18];
        let temp2 = this.cube_color[0];
        let temp3 = this.cube_color[24];
        let temp4 = this.cube_color[6];
        if(direction == 1){
            this.cube_color[18] =  temp3;
            let temp = this.cube_color[18][1];
            this.cube_color[18][1] = this.cube_color[18][2];
            this.cube_color[18][2] = temp;

            this.cube_color[0] =  temp1;
            temp = this.cube_color[0][1];
            this.cube_color[0][1] = this.cube_color[0][2];
            this.cube_color[0][2] = temp;

            this.cube_color[24] =  temp4;
            temp = this.cube_color[24][1];
            this.cube_color[24][1] = this.cube_color[24][2];
            this.cube_color[24][2] = temp;

            this.cube_color[6] =  temp2;
            temp = this.cube_color[6][1];
            this.cube_color[6][1] = this.cube_color[6][2];
            this.cube_color[6][2] = temp;

            temp1 = this.cube_color[3];
            temp2 = this.cube_color[9];
            temp3 = this.cube_color[15];
            temp4 = this.cube_color[21];
            this.cube_color[21] = temp3;
            temp = this.cube_color[21][0];
            this.cube_color[21][0] = this.cube_color[21][1];
            this.cube_color[21][1] = temp;

            this.cube_color[3]= temp2;
            temp = this.cube_color[3][0];
            this.cube_color[3][0] = this.cube_color[3][1];
            this.cube_color[3][1] = temp;

            this.cube_color[15] = temp1;
            temp = this.cube_color[15][0];
            this.cube_color[15][0] = this.cube_color[15][1];
            this.cube_color[15][1] = temp;

            this.cube_color[9] = temp4;
            temp = this.cube_color[9][0];
            this.cube_color[9][0] = this.cube_color[9][1];
            this.cube_color[9][1] = temp;
        }else{
            this.cube_color[18] =  temp2;
            let temp = this.cube_color[18][1];
            this.cube_color[18][1] = this.cube_color[18][2];
            this.cube_color[18][2] = temp;

            this.cube_color[0] =  temp4;
            temp = this.cube_color[0][1];
            this.cube_color[0][1] = this.cube_color[0][2];
            this.cube_color[0][2] = temp;

            this.cube_color[24] =  temp1;
            temp = this.cube_color[24][1];
            this.cube_color[24][1] = this.cube_color[24][2];
            this.cube_color[24][2] = temp;

            this.cube_color[6] =  temp3;
            temp = this.cube_color[6][1];
            this.cube_color[6][1] = this.cube_color[6][2];
            this.cube_color[6][2] = temp;

            temp1 = this.cube_color[3];
            temp2 = this.cube_color[9];
            temp3 = this.cube_color[15];
            temp4 = this.cube_color[21];
            this.cube_color[21] = temp2;
            temp = this.cube_color[21][0];
            this.cube_color[21][0] = this.cube_color[21][1];
            this.cube_color[21][1] = temp;
            this.cube_color[3]= temp3;
            temp = this.cube_color[3][0];
            this.cube_color[3][0] = this.cube_color[3][1];
            this.cube_color[3][1] = temp;
            this.cube_color[15] = temp4;
            temp = this.cube_color[15][0];
            this.cube_color[15][0] = this.cube_color[15][1];
            this.cube_color[15][1] = temp;
            this.cube_color[9] = temp1;
            temp = this.cube_color[9][0];
            this.cube_color[9][0] = this.cube_color[9][1];
            this.cube_color[9][1] = temp;
        }

    }
    right_rotation_texture(context, program_state, direction) {//2 20 8 26; 11 5 23 17
        let ro = Mat4.translation(2,0,-2).times(Mat4.rotation(this.angle, direction, 0, 0)).times(Mat4.translation(-2,0,2));
        //rendering corner texture
        for (let i = 0; i < 3; i++) {

            this.shapes.cube.draw(context, program_state, ro.times(this.c2_tl[i]).times(this.c2_tsc[i]), this.materials.plastic.override({color: this.cube_color[2][i]}));
            this.shapes.cube.draw(context, program_state, ro.times(this.c8_tl[i]).times(this.c8_tsc[i]), this.materials.plastic.override({color: this.cube_color[8][i]}));
            this.shapes.cube.draw(context, program_state,ro.times(this.c20_tl[i]).times(this.c20_tsc[i]), this.materials.plastic.override({color: this.cube_color[20][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c26_tl[i]).times(this.c26_tsc[i]), this.materials.plastic.override({color: this.cube_color[26][i]}) );

        }
        //rendering center texture
        this.shapes.cube.draw(context, program_state,ro.times(this.c14_tl[0]).times(this.c14_tsc[0]), this.materials.plastic.override({color: this.cube_color[14][0]}));
        //rendering edge texture
        for (let i = 0; i < 2; i++) {
            this.shapes.cube.draw(context, program_state, ro.times(this.c5_tl[i]).times(this.c5_tsc[i]), this.materials.plastic.override({color: this.cube_color[5][i]}));
            this.shapes.cube.draw(context, program_state,ro.times(this.c11_tl[i]).times(this.c11_tsc[i]), this.materials.plastic.override({color: this.cube_color[11][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c17_tl[i]).times(this.c17_tsc[i]), this.materials.plastic.override({color: this.cube_color[17][i]}) );
            this.shapes.cube.draw(context, program_state,ro.times(this.c23_tl[i]).times(this.c23_tsc[i]), this.materials.plastic.override({color: this.cube_color[23][i]}) );

        }
        //end
        //rendering textures that don't turn
        //rendering corner cube texture
        for(let i=0; i<3; i++){
            this.shapes.cube.draw(context, program_state,this.c0_tl[i].times(this.c0_tsc[i]), this.materials.plastic.override({color: this.cube_color[0][i]}) );
            this.shapes.cube.draw(context, program_state,this.c6_tl[i].times(this.c6_tsc[i]), this.materials.plastic.override({color: this.cube_color[6][i]}) );
            this.shapes.cube.draw(context, program_state,this.c18_tl[i].times(this.c18_tsc[i]), this.materials.plastic.override({color: this.cube_color[18][i]}) );
            this.shapes.cube.draw(context, program_state,this.c24_tl[i].times(this.c24_tsc[i]), this.materials.plastic.override({color: this.cube_color[24][i]}) );
        }
        //rendering middle cube texture
        this.shapes.cube.draw(context, program_state,this.c10_tl[0].times(this.c10_tsc[0]), this.materials.plastic.override({color: this.cube_color[10][0]}));
        this.shapes.cube.draw(context, program_state,this.c4_tl[0].times(this.c4_tsc[0]), this.materials.plastic.override({color: this.cube_color[4][0]}));
        this.shapes.cube.draw(context, program_state,this.c12_tl[0].times(this.c12_tsc[0]), this.materials.plastic.override({color: this.cube_color[12][0]}));
        this.shapes.cube.draw(context, program_state,this.c16_tl[0].times(this.c16_tsc[0]), this.materials.plastic.override({color: this.cube_color[16][0]}));
        this.shapes.cube.draw(context, program_state,this.c22_tl[0].times(this.c22_tsc[0]), this.materials.plastic.override({color: this.cube_color[22][0]}));
        //rendering edge cube texture
        for(let i=0; i<2; i++){
            this.shapes.cube.draw(context, program_state,this.c1_tl[i].times(this.c1_tsc[i]), this.materials.plastic.override({color: this.cube_color[1][i]}) );
            this.shapes.cube.draw(context, program_state,this.c9_tl[i].times(this.c9_tsc[i]), this.materials.plastic.override({color: this.cube_color[9][i]}) );
            this.shapes.cube.draw(context, program_state,this.c7_tl[i].times(this.c7_tsc[i]), this.materials.plastic.override({color: this.cube_color[7][i]}) );
            this.shapes.cube.draw(context, program_state,this.c3_tl[i].times(this.c3_tsc[i]), this.materials.plastic.override({color: this.cube_color[3][i]}) );
            this.shapes.cube.draw(context, program_state,this.c19_tl[i].times(this.c19_tsc[i]), this.materials.plastic.override({color: this.cube_color[19][i]}) );
            this.shapes.cube.draw(context, program_state,this.c15_tl[i].times(this.c15_tsc[i]), this.materials.plastic.override({color: this.cube_color[15][i]}) );
            this.shapes.cube.draw(context, program_state,this.c21_tl[i].times(this.c21_tsc[i]), this.materials.plastic.override({color: this.cube_color[21][i]}) );
            this.shapes.cube.draw(context, program_state,this.c25_tl[i].times(this.c25_tsc[i]), this.materials.plastic.override({color: this.cube_color[25][i]}) );
        }
    }
    right_rotation_texture_update(direction){ //2 20 8 26; 11 5 23 17
        /*update texture location */
        let temp1 = this.cube_color[2];
        let temp2 = this.cube_color[20];
        let temp3 = this.cube_color[8];
        let temp4 = this.cube_color[26];
        if(direction == 1){
            this.cube_color[2] =  temp2;
            let temp = this.cube_color[2][2];
            this.cube_color[2][2] = this.cube_color[2][1];
            this.cube_color[2][1] = temp;

            this.cube_color[20] =  temp4;
            temp = this.cube_color[20][1];
            this.cube_color[20][1] = this.cube_color[20][2];
            this.cube_color[20][2] = temp;

            this.cube_color[8] =  temp1;
            temp = this.cube_color[8][1];
            this.cube_color[8][1] = this.cube_color[8][2];
            this.cube_color[8][2] = temp;

            this.cube_color[26] =  temp3;
            temp = this.cube_color[26][1];
            this.cube_color[26][1] = this.cube_color[26][2];
            this.cube_color[26][2] = temp;

            temp1 = this.cube_color[11];
            temp2 = this.cube_color[5];
            temp3 = this.cube_color[23];
            temp4 = this.cube_color[17];

            this.cube_color[11] = temp3;
            temp = this.cube_color[11][1];
            this.cube_color[11][1] = this.cube_color[11][0];
            this.cube_color[11][0] = temp;

            this.cube_color[5]= temp1;
            temp = this.cube_color[5][1];
            this.cube_color[5][1] = this.cube_color[5][0];
            this.cube_color[5][0] = temp;

            this.cube_color[23] = temp4;
            temp = this.cube_color[23][1];
            this.cube_color[23][1] = this.cube_color[23][0];
            this.cube_color[23][0] = temp;

            this.cube_color[17] = temp2;
            temp = this.cube_color[17][1];
            this.cube_color[17][1] = this.cube_color[17][0];
            this.cube_color[17][0] = temp;

        }else{
            this.cube_color[2] =  temp3;
            let temp = this.cube_color[2][2];
            this.cube_color[2][2] = this.cube_color[2][1];
            this.cube_color[2][1] = temp;

            this.cube_color[20] =  temp1;
            temp = this.cube_color[20][1];
            this.cube_color[20][1] = this.cube_color[20][2];
            this.cube_color[20][2] = temp;

            this.cube_color[8] =  temp4;
            temp = this.cube_color[8][1];
            this.cube_color[8][1] = this.cube_color[8][2];
            this.cube_color[8][2] = temp;

            this.cube_color[26] =  temp2;
            temp = this.cube_color[26][1];
            this.cube_color[26][1] = this.cube_color[26][2];
            this.cube_color[26][2] = temp;

            temp1 = this.cube_color[11];
            temp2 = this.cube_color[5];
            temp3 = this.cube_color[23];
            temp4 = this.cube_color[17];

            this.cube_color[11] = temp2;
            temp = this.cube_color[11][1];
            this.cube_color[11][1] = this.cube_color[11][0];
            this.cube_color[11][0] = temp;

            this.cube_color[5]= temp4;
            temp = this.cube_color[5][1];
            this.cube_color[5][1] = this.cube_color[5][0];
            this.cube_color[5][0] = temp;

            this.cube_color[23] = temp1;
            temp = this.cube_color[23][1];
            this.cube_color[23][1] = this.cube_color[23][0];
            this.cube_color[23][0] = temp;

            this.cube_color[17] = temp3;
            temp = this.cube_color[17][1];
            this.cube_color[17][1] = this.cube_color[17][0];
            this.cube_color[17][0] = temp;
        }

    }
    idle_texture(context, program_state){
        //rendering corner cube texture
        for(let i=0; i<3; i++){
            this.shapes.cube.draw(context, program_state,this.c0_tl[i].times(this.c0_tsc[i]), this.materials.plastic.override({color: this.cube_color[0][i]}) );
            this.shapes.cube.draw(context, program_state,this.c2_tl[i].times(this.c2_tsc[i]), this.materials.plastic.override({color: this.cube_color[2][i]}) );
            this.shapes.cube.draw(context, program_state,this.c6_tl[i].times(this.c6_tsc[i]), this.materials.plastic.override({color: this.cube_color[6][i]}) );
            this.shapes.cube.draw(context, program_state,this.c8_tl[i].times(this.c8_tsc[i]), this.materials.plastic.override({color: this.cube_color[8][i]}) );
            this.shapes.cube.draw(context, program_state,this.c18_tl[i].times(this.c18_tsc[i]), this.materials.plastic.override({color: this.cube_color[18][i]}) );
            this.shapes.cube.draw(context, program_state,this.c20_tl[i].times(this.c20_tsc[i]), this.materials.plastic.override({color: this.cube_color[20][i]}) );
            this.shapes.cube.draw(context, program_state,this.c24_tl[i].times(this.c24_tsc[i]), this.materials.plastic.override({color: this.cube_color[24][i]}) );
            this.shapes.cube.draw(context, program_state,this.c26_tl[i].times(this.c26_tsc[i]), this.materials.plastic.override({color: this.cube_color[26][i]}) );
        }
        //rendering middle cubes
        this.shapes.cube.draw(context, program_state,this.c4_tl[0].times(this.c4_tsc[0]), this.materials.plastic.override({color: this.cube_color[4][0]}));
        this.shapes.cube.draw(context, program_state,this.c10_tl[0].times(this.c10_tsc[0]), this.materials.plastic.override({color: this.cube_color[10][0]}));
        this.shapes.cube.draw(context, program_state,this.c12_tl[0].times(this.c12_tsc[0]), this.materials.plastic.override({color: this.cube_color[12][0]}));
        this.shapes.cube.draw(context, program_state,this.c14_tl[0].times(this.c14_tsc[0]), this.materials.plastic.override({color: this.cube_color[14][0]}));
        this.shapes.cube.draw(context, program_state,this.c16_tl[0].times(this.c16_tsc[0]), this.materials.plastic.override({color: this.cube_color[16][0]}));
        this.shapes.cube.draw(context, program_state,this.c22_tl[0].times(this.c22_tsc[0]), this.materials.plastic.override({color: this.cube_color[22][0]}));
        //rendering edge cubes
        for(let i=0; i<2; i++){
            this.shapes.cube.draw(context, program_state,this.c1_tl[i].times(this.c1_tsc[i]), this.materials.plastic.override({color: this.cube_color[1][i]}) );
            this.shapes.cube.draw(context, program_state,this.c3_tl[i].times(this.c3_tsc[i]), this.materials.plastic.override({color: this.cube_color[3][i]}) );
            this.shapes.cube.draw(context, program_state,this.c5_tl[i].times(this.c5_tsc[i]), this.materials.plastic.override({color: this.cube_color[5][i]}) );
            this.shapes.cube.draw(context, program_state,this.c7_tl[i].times(this.c7_tsc[i]), this.materials.plastic.override({color: this.cube_color[7][i]}) );
            this.shapes.cube.draw(context, program_state,this.c9_tl[i].times(this.c9_tsc[i]), this.materials.plastic.override({color: this.cube_color[9][i]}) );
            this.shapes.cube.draw(context, program_state,this.c11_tl[i].times(this.c11_tsc[i]), this.materials.plastic.override({color: this.cube_color[11][i]}) );
            this.shapes.cube.draw(context, program_state,this.c15_tl[i].times(this.c15_tsc[i]), this.materials.plastic.override({color: this.cube_color[15][i]}) );
            this.shapes.cube.draw(context, program_state,this.c17_tl[i].times(this.c17_tsc[i]), this.materials.plastic.override({color: this.cube_color[17][i]}) );
            this.shapes.cube.draw(context, program_state,this.c19_tl[i].times(this.c19_tsc[i]), this.materials.plastic.override({color: this.cube_color[19][i]}) );
            this.shapes.cube.draw(context, program_state,this.c21_tl[i].times(this.c21_tsc[i]), this.materials.plastic.override({color: this.cube_color[21][i]}) );
            this.shapes.cube.draw(context, program_state,this.c23_tl[i].times(this.c23_tsc[i]), this.materials.plastic.override({color: this.cube_color[23][i]}) );
            this.shapes.cube.draw(context, program_state,this.c25_tl[i].times(this.c25_tsc[i]), this.materials.plastic.override({color: this.cube_color[25][i]}) );
        }
    }

    display(context, program_state) {
        super.display(context, program_state);
        const blue = hex_color("#1a9ffa"), yellow = hex_color("#fdc03a");
        let model_transform = Mat4.identity();

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
            let coordinate = 2;
            this.angle = this.angle+0.25*Math.PI*(program_state.animation_delta_time / 1000);
            if (this.angle > 0.4999*Math.PI) {
                this.angle = Math.PI*0.5;
            }
            this.front_rotation_texture(context, program_state, this.direction);
            let c=[Mat4.identity(),Mat4.identity(),Mat4.identity(),Mat4.identity(),Mat4.identity(),Mat4.identity(),Mat4.identity(),Mat4.identity(),Mat4.identity()];
            for (let i=0; i < 9; i++){
                let cube=this.cube_index[needed_index[i]];
                let x=this.cube_coordinate_status[cube][coordinate][0],y=this.cube_coordinate_status[cube][coordinate][1],z=this.cube_coordinate_status[cube][coordinate][2];
                let ro = Mat4.rotation( this.angle, x* this.direction, y* this.direction, z* this.direction);
                c[i] = this.cube_matrix[cube];
                c[i] = c[i].times(this.cube_recenter[cube][this.cube_coordinate_status[cube][coordinate][3]]);
                c[i] = c[i].times(ro).times(this.cube_recenter[cube][this.cube_coordinate_status[cube][coordinate][3]+1]);
                this.shapes.cube.draw(context, program_state, c[i], this.materials.plastic);
                //this.cube_matrix[cube]=c[i];
            }

            for (let i = 0; i < 27; i++ ){
                if (! needed_index.includes(i,0)){
                    this.shapes.cube.draw(context, program_state, this.cube_matrix[this.cube_index[i]], this.materials.plastic);
                }
            }

            if (this.angle == 0.5*Math.PI) {
                this.front_couter_clockwise = !this.front_couter_clockwise;
                this.pass = !this.pass;
                let cube=[1,1,1,1,1,1,1,1,1];

                if (this.direction == 1){
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
                }
                else{
                    for (let i=0;i < 9; i++){
                        cube[i] = this.cube_index[needed_index[i]];
                        this.cube_matrix[cube[i]]=c[i];
                        let x_coordinate = this.cube_coordinate_status[cube[i]][0],y_coordinate = this.cube_coordinate_status[cube[i]][1],
                            x_negative_coordinate = this.cube_coordinate_status[cube[i]][3],y_negative_coordinate = this.cube_coordinate_status[cube[i]][4];
                        this.cube_coordinate_status[cube[i]][0] = y_coordinate;
                        this.cube_coordinate_status[cube[i]][1] = x_negative_coordinate;
                        this.cube_coordinate_status[cube[i]][3] = y_negative_coordinate;
                        this.cube_coordinate_status[cube[i]][4] = x_coordinate;
                    }

                    this.cube_index[0]=cube[6];
                    this.cube_index[1]=cube[3];
                    this.cube_index[2]=cube[0];
                    this.cube_index[3]=cube[7];
                    this.cube_index[4]=cube[4];
                    this.cube_index[5]=cube[1];
                    this.cube_index[6]=cube[8];
                    this.cube_index[7]=cube[5];
                    this.cube_index[8]=cube[2];
                }


                this.angle = 0;
                this.front_rotation_texture_update(this.direction);
                this.direction = 1;
            }
        }

        if (this.Top_turn) {
            let needed_index = [0, 1, 2, 9, 10, 11, 18, 19, 20];
            let coordinate = 1;
            this.angle = this.angle + 0.25 * Math.PI * (program_state.animation_delta_time / 1000);
            if (this.angle > 0.4999*Math.PI) {
                this.angle = Math.PI*0.5;
            }
            this.top_rotation_texture(context,program_state,this.direction);
            let c = [Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity()];
            for (let i = 0; i < 9; i++) {
                let cube = this.cube_index[needed_index[i]];
                let x = this.cube_coordinate_status[cube][coordinate][0], y = this.cube_coordinate_status[cube][coordinate][1], z = this.cube_coordinate_status[cube][coordinate][2];
                let ro = Mat4.rotation(this.angle , x* this.direction, y* this.direction, z* this.direction);
                c[i] = this.cube_matrix[cube];
                c[i] = c[i].times(this.cube_recenter[cube][this.cube_coordinate_status[cube][coordinate][3]]);
                c[i] = c[i].times(ro).times(this.cube_recenter[cube][this.cube_coordinate_status[cube][coordinate][3] + 1]);
                this.shapes.cube.draw(context, program_state, c[i], this.materials.plastic);
                //this.cube_matrix[cube]=c[i];
            }

            for (let i = 0; i < 27; i++ ){
                if (! needed_index.includes(i,0)){
                    this.shapes.cube.draw(context, program_state, this.cube_matrix[this.cube_index[i]], this.materials.plastic);
                }
            }

            if (this.angle == 0.5*Math.PI) {
                this.Top_turn = !this.Top_turn;
                this.pass = !this.pass;
                let cube=[1,1,1,1,1,1,1,1,1];
                if (this.direction == -1){
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
                }
                else {
                    for (let i=0;i < 9; i++){
                        cube[i] = this.cube_index[needed_index[i]];
                        this.cube_matrix[cube[i]]=c[i];
                        let x_coordinate = this.cube_coordinate_status[cube[i]][0],z_coordinate = this.cube_coordinate_status[cube[i]][2],
                            x_negative_coordinate = this.cube_coordinate_status[cube[i]][3],z_negative_coordinate = this.cube_coordinate_status[cube[i]][5];
                        this.cube_coordinate_status[cube[i]][0] = z_coordinate;
                        this.cube_coordinate_status[cube[i]][3] = z_negative_coordinate;
                        this.cube_coordinate_status[cube[i]][2] = x_negative_coordinate;
                        this.cube_coordinate_status[cube[i]][5] = x_coordinate;
                    }

                    this.cube_index[0]=cube[6];
                    this.cube_index[1]=cube[3];
                    this.cube_index[2]=cube[0];
                    this.cube_index[9]=cube[7];
                    this.cube_index[10]=cube[4];
                    this.cube_index[11]=cube[1];
                    this.cube_index[18]=cube[8];
                    this.cube_index[19]=cube[5];
                    this.cube_index[20]=cube[2];
                }


                this.angle = 0;
                this.top_rotation_texture_update(this.direction);
                this.direction = 1;
            }
        }
        if(this.Right_turn){
            let needed_index = [2, 5, 8, 11, 14, 17, 20, 23, 26];
            let coordinate = 0;
            this.angle = this.angle + 0.25 * Math.PI * (program_state.animation_delta_time / 1000);
            if (this.angle > 0.4999*Math.PI) {
                this.angle = Math.PI*0.5;
            }
            this.right_rotation_texture(context,program_state,this.direction);
            let c = [Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity()];

            for (let i = 0; i < 9; i++) {
                let cube = this.cube_index[needed_index[i]];
                let x = this.cube_coordinate_status[cube][coordinate][0], y = this.cube_coordinate_status[cube][coordinate][1], z = this.cube_coordinate_status[cube][coordinate][2];
                let ro = Mat4.rotation(this.angle , x* this.direction, y* this.direction, z* this.direction);
                c[i] = this.cube_matrix[cube];
                c[i] = c[i].times(this.cube_recenter[cube][this.cube_coordinate_status[cube][coordinate][3]]);
                c[i] = c[i].times(ro).times(this.cube_recenter[cube][this.cube_coordinate_status[cube][coordinate][3] + 1]);
                this.shapes.cube.draw(context, program_state, c[i], this.materials.plastic);
                //this.cube_matrix[cube]=c[i];
            }

            for (let i = 0; i < 27; i++ ){
                if (! needed_index.includes(i,0)){
                    this.shapes.cube.draw(context, program_state, this.cube_matrix[this.cube_index[i]], this.materials.plastic);
                }
            }

            if (this.angle == 0.5*Math.PI) {
                this.Right_turn = !this.Right_turn;
                this.pass = !this.pass;
                let cube=[1,1,1,1,1,1,1,1,1];

                if (this.direction == 1){
                    for (let i=0;i < 9; i++){
                        cube[i] = this.cube_index[needed_index[i]];
                        this.cube_matrix[cube[i]]=c[i];
                        let y_coordinate = this.cube_coordinate_status[cube[i]][1],z_coordinate = this.cube_coordinate_status[cube[i]][2],
                            y_negative_coordinate = this.cube_coordinate_status[cube[i]][4],z_negative_coordinate = this.cube_coordinate_status[cube[i]][5];
                        this.cube_coordinate_status[cube[i]][1] = z_negative_coordinate;
                        this.cube_coordinate_status[cube[i]][4] = z_coordinate;
                        this.cube_coordinate_status[cube[i]][2] = y_coordinate;
                        this.cube_coordinate_status[cube[i]][5] = y_negative_coordinate;
                    }

                    this.cube_index[2]=cube[6];
                    this.cube_index[5]=cube[3];
                    this.cube_index[8]=cube[0];
                    this.cube_index[11]=cube[7];
                    this.cube_index[14]=cube[4];
                    this.cube_index[17]=cube[1];
                    this.cube_index[20]=cube[8];
                    this.cube_index[23]=cube[5];
                    this.cube_index[26]=cube[2];
                }
                else {
                    for (let i=0;i < 9; i++){
                        cube[i] = this.cube_index[needed_index[i]];
                        this.cube_matrix[cube[i]]=c[i];
                        let y_coordinate = this.cube_coordinate_status[cube[i]][1],z_coordinate = this.cube_coordinate_status[cube[i]][2],
                            y_negative_coordinate = this.cube_coordinate_status[cube[i]][4],z_negative_coordinate = this.cube_coordinate_status[cube[i]][5];
                        this.cube_coordinate_status[cube[i]][1] = z_coordinate;
                        this.cube_coordinate_status[cube[i]][4] = z_negative_coordinate;
                        this.cube_coordinate_status[cube[i]][2] = y_negative_coordinate;
                        this.cube_coordinate_status[cube[i]][5] = y_coordinate;
                    }

                    this.cube_index[2]=cube[2];
                    this.cube_index[5]=cube[5];
                    this.cube_index[8]=cube[8];
                    this.cube_index[11]=cube[1];
                    this.cube_index[14]=cube[4];
                    this.cube_index[17]=cube[7];
                    this.cube_index[20]=cube[0];
                    this.cube_index[23]=cube[3];
                    this.cube_index[26]=cube[6];
                }

                this.angle = 0;
                this.right_rotation_texture_update(this.direction);
                this.direction = 1;
            }
        }

        if(this.Left_turn){
            let needed_index = [0, 3, 6, 9, 12, 15, 18, 21, 24];
            let coordinate = 0;
            this.angle = this.angle + 0.25 * Math.PI * (program_state.animation_delta_time / 1000);
            if (this.angle > 0.4999*Math.PI) {
                this.angle = Math.PI*0.5;
            }
            this.left_rotation_texture(context,program_state,this.direction);
            let c = [Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity(), Mat4.identity()];

            for (let i = 0; i < 9; i++) {
                let cube = this.cube_index[needed_index[i]];
                let x = this.cube_coordinate_status[cube][coordinate][0], y = this.cube_coordinate_status[cube][coordinate][1], z = this.cube_coordinate_status[cube][coordinate][2];
                let ro = Mat4.rotation(this.angle , x* this.direction, y* this.direction, z* this.direction);
                c[i] = this.cube_matrix[cube];
                c[i] = c[i].times(this.cube_recenter[cube][this.cube_coordinate_status[cube][coordinate][3]]);
                c[i] = c[i].times(ro).times(this.cube_recenter[cube][this.cube_coordinate_status[cube][coordinate][3] + 1]);
                this.shapes.cube.draw(context, program_state, c[i], this.materials.plastic);
                //this.cube_matrix[cube]=c[i];
            }

            for (let i = 0; i < 27; i++ ){
                if (! needed_index.includes(i,0)){
                    this.shapes.cube.draw(context, program_state, this.cube_matrix[this.cube_index[i]], this.materials.plastic);
                }
            }

            if (this.angle == 0.5*Math.PI) {
                this.Left_turn = !this.Left_turn;
                this.pass = !this.pass;
                let cube=[1,1,1,1,1,1,1,1,1];

                if (this.direction == 1){
                    for (let i=0;i < 9; i++){
                        cube[i] = this.cube_index[needed_index[i]];
                        this.cube_matrix[cube[i]]=c[i];
                        let y_coordinate = this.cube_coordinate_status[cube[i]][1],z_coordinate = this.cube_coordinate_status[cube[i]][2],
                            y_negative_coordinate = this.cube_coordinate_status[cube[i]][4],z_negative_coordinate = this.cube_coordinate_status[cube[i]][5];
                        this.cube_coordinate_status[cube[i]][1] = z_negative_coordinate;
                        this.cube_coordinate_status[cube[i]][4] = z_coordinate;
                        this.cube_coordinate_status[cube[i]][2] = y_coordinate;
                        this.cube_coordinate_status[cube[i]][5] = y_negative_coordinate;
                    }

                    this.cube_index[0]=cube[6];
                    this.cube_index[3]=cube[3];
                    this.cube_index[6]=cube[0];
                    this.cube_index[9]=cube[7];
                    this.cube_index[12]=cube[4];
                    this.cube_index[15]=cube[1];
                    this.cube_index[18]=cube[8];
                    this.cube_index[21]=cube[5];
                    this.cube_index[24]=cube[2];
                }
                else {
                    for (let i=0;i < 9; i++){
                        cube[i] = this.cube_index[needed_index[i]];
                        this.cube_matrix[cube[i]]=c[i];
                        let y_coordinate = this.cube_coordinate_status[cube[i]][1],z_coordinate = this.cube_coordinate_status[cube[i]][2],
                            y_negative_coordinate = this.cube_coordinate_status[cube[i]][4],z_negative_coordinate = this.cube_coordinate_status[cube[i]][5];
                        this.cube_coordinate_status[cube[i]][1] = z_coordinate;
                        this.cube_coordinate_status[cube[i]][4] = z_negative_coordinate;
                        this.cube_coordinate_status[cube[i]][2] = y_negative_coordinate;
                        this.cube_coordinate_status[cube[i]][5] = y_coordinate;
                    }

                    this.cube_index[0]=cube[2];
                    this.cube_index[3]=cube[5];
                    this.cube_index[6]=cube[8];
                    this.cube_index[9]=cube[1];
                    this.cube_index[12]=cube[4];
                    this.cube_index[15]=cube[7];
                    this.cube_index[18]=cube[0];
                    this.cube_index[21]=cube[3];
                    this.cube_index[24]=cube[6];
                }

                this.angle = 0;
                this.left_rotation_texture_update(this.direction);
                this.direction = 1;
            }
        }

        if (this.pass){
            this.idle_texture(context, program_state);
            for (let i = 0; i < 27; i++ ){
                this.shapes.cube.draw(context, program_state, this.cube_matrix[this.cube_index[i]], this.materials.plastic);
            }
        }
    }
}