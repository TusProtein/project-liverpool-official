
// Đối tượng `Validator`
function Validator(options) {

    function Validate(inputElement,rule){
        var errorElement = inputElement.parentElement.querySelector(options.errorElement)

        var errorValue = rule.test(inputElement.value);
        if (errorValue){
            errorElement.innerText = errorValue;
            inputElement.parentElement.classList.add('invalid')
        } else {
            errorElement.innerText = ''
            inputElement.parentElement.classList.remove('invalid')
        }
        return !errorValue;
    }

    const formElement = document.querySelector(options.form)
    if (formElement){
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

        // Lặp qua từng rule và validate    
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = Validate(inputElement,rule);
                if (!isValid){
                    isFormValid = false;
                }
            });
            


            if (isFormValid){
                if(typeof options.onSubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]')
                    var formValues = Array.from(enableInputs).reduce(function (values,input) {
                        values[input.name] = input.value;
                        return values;
                 }, {} )
                    options.onSubmit(formValues)
                }
                
            } 
        }
        



        // Lặp qua từng rule và xử lý sự kiện 
        options.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector)
            if (inputElement){
                // Xử lý blur khỏi input 
                inputElement.onblur = function(){
                    Validate(inputElement,rule);
                
                // Xử lý mỗi khi người dùng bắt đầu nhập 
                inputElement.oninput = function () {
            var errorElement = inputElement.parentElement.querySelector(options.errorElement)
                    errorElement.innerText = ''
                    inputElement.parentElement.classList.remove('invalid')

                }

                }
            }
        })
    }
}


// Định nghĩa rules
Validator.isRequired = function(selector,message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function(selector,message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message || 'Trường này phải là email'
        }
    }
}

Validator.minLength = function(selector, min,message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
}







