bit init

bit import bit.envs/compilers/react --compiler

bit login

bit add components/TestButton.js

bit build

bit tag --all 0.0.1 --message "Initial"

bit export akull.test
