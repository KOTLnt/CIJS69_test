
class Input {

    $containerIp;
    $labelIp;
    $inputIp;

    constructor(name, type, placeholder) {

        this.$containerIp = document.createElement("div");
        
        this.$labelIp = document.createElement("label");
        this.$labelIp.textContent = name;
        
        this.$inputIp = document.createElement("input");
        this.$inputIp.type = type;
        this.$inputIp.placeholder = placeholder;
        
    }

    render() {
        this.$containerIp.appendChild(this.$labelIp);
        this.$containerIp.appendChild(this.$inputIp);

        return this.$containerIp;
    }

    getValue() {
        return this.$inputIp.value;
    }
}

export default Input;