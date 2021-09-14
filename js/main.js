//目标区域（表单创建区域）
const target = document.querySelector('.body-form');
//所有表单字段
let targetTitles = null;
//添加过的表单字段
let addNewNodes = [];

//持久化（半持久化）
const getFormBody = function () {
    console.log('刷新了');
    if(window.localStorage.getItem('form')){
        document.getElementById('body-form').innerHTML = window.localStorage.getItem('form');
        // length = window.localStorage.getItem('addNewlength');
        addNewNodes = [];
        document.querySelectorAll('#body-form .body-form-target').forEach(node => {
            addNewNodes.push(node);
        });
    }
};
window.onload = getFormBody;


//修改表单字段name
const editCtrlName = function (obj) {
    const inputElement = obj.querySelector('input');
    inputElement.style = "display: block;";
    inputElement.disabled = false;
    inputElement.value = inputElement.previousElementSibling.innerText;
    inputElement.previousElementSibling.style = "display: none;";
    inputElement.focus();
}
const updateCtrlName = function (inputElement) {
    inputElement.disabled = true;
    inputElement.style = "display: none;";
    inputElement.previousElementSibling.innerText = inputElement.value;
    inputElement.value = '';
    inputElement.previousElementSibling.style = "display: block;";
}

//删除表单字段
const deleteCtrlFrom = function (deleteElement) {
    deleteElement = deleteElement.parentNode.parentNode;
    deleteElement.remove();
    window.localStorage.setItem('form',document.getElementById('body-form').innerHTML);
}

//删除所有字段
function clearNodes(){
    document.querySelectorAll('.body-form-target').forEach(node => {
        node.remove();
    });
    window.localStorage.clear();
}

// 表单提交
function submitNodes() {
    window.localStorage.clear();
    window.localStorage.setItem('form',document.getElementById('body-form').innerHTML);
}

//表单字段主体
const formTypeActions = {
    '短文本': {
        action: function () {
            const formNode = document.createElement('div');
            formNode.className = 'body-form-target shortText';
            formNode.innerHTML = `<div class="body-form-target-title" onclick="editCtrlName(this)">
                                    <div>短文本</div>
                                    <input type="text" disabled style="display: none" onblur="updateCtrlName(this)"/>
                                  </div>
                                  <div class="body-form-target-body">
                                    <button type="button" onclick="deleteCtrlFrom(this)"><span>-</span></button>
                                    <input type="text" name="text" />
                                  </div>`;
            target.appendChild(formNode);
            return formNode;
        },
    },
    '长文本': {
        action: function () {
            const formNode = document.createElement('div');
            formNode.className = 'body-form-target textArea';
            formNode.innerHTML = `<div class="body-form-target-title" onclick="editCtrlName(this)">
                                    <div>长文本</div>
                                    <input type="text" disabled style="display: none" onblur="updateCtrlName(this)"/>
                                 </div>
                                 <div class="body-form-target-body">
                                    <button type="button" onclick="deleteCtrlFrom(this)"><span>-</span></button>
                                    <textarea></textarea>
                                 </div>`;
            target.appendChild(formNode);
            return formNode;
        }
    },
    '数字': {
        action: function () {
            const formNode = document.createElement('div');
            formNode.className = 'body-form-target number';
            formNode.innerHTML = `<div class="body-form-target-title" onclick="editCtrlName(this)">
                                    <div>数字</div>       
                                    <input type="text" disabled style="display: none" onblur="updateCtrlName(this)"/>
                                 </div>
                                 <div class="body-form-target-body">
                                    <button type="button" onclick="deleteCtrlFrom(this)"><span>-</span></button>
                                    <input type="number" name="number" placeholder="请输入数字" />
                                 </div>`;
            target.appendChild(formNode);
            return formNode;
        }
    },
    '密码': {
        action: function () {
            const formNode = document.createElement('div');
            formNode.className = 'body-form-target password';
            formNode.innerHTML = `<div class="body-form-target-title" onclick="editCtrlName(this)">
                                    <div>密码</div>
                                    <input type="text" disabled style="display: none" onblur="updateCtrlName(this)"/>
                                 </div>
                                 <div class="body-form-target-body">
                                    <button type="button" onclick="deleteCtrlFrom(this)"><span>-</span></button>
                                    <input type="password" name="password" placeholder="请输入密码" />
                                 </div>`;
            target.appendChild(formNode);
            return formNode;
        }
    },
    '电话': {
        action: function () {
            const formNode = document.createElement('div');
            formNode.className = 'body-form-target tel';
            formNode.innerHTML = `<div class="body-form-target-title" onclick="editCtrlName(this)">
                                    <div>电话</div>
                                    <input type="text" disabled style="display: none" onblur="updateCtrlName(this)"/>
                                 </div>
                                 <div class="body-form-target-body">
                                    <button type="button" onclick="deleteCtrlFrom(this)"><span>-</span></button>
                                    <input type="tel" name="tel" placeholder="请输入电话" />
                                 </div>`;
            target.appendChild(formNode);
            return formNode;
        }
    },
    '邮箱': {
        action: function () {
            const formNode = document.createElement('div');
            formNode.className = 'body-form-target email';
            formNode.innerHTML = `<div class="body-form-target-title" onclick="editCtrlName(this)">
                                    <div>邮箱</div>
                                    <input type="text" disabled style="display: none" onblur="updateCtrlName(this)"/>
                                 </div>
                                 <div class="body-form-target-body">
                                    <button type="button" onclick="deleteCtrlFrom(this)"><span>-</span></button>
                                    <input type="email" name="email" placeholder="请输入邮箱" />
                                 </div>`;
            target.appendChild(formNode);
            return formNode;
        }
    },
    '文件': {
        action: function () {
            const formNode = document.createElement('div');
            formNode.className = 'body-form-target file';
            formNode.innerHTML = `<div class="body-form-target-title" onclick="editCtrlName(this)">
                                    <div>文件</div>
                                    <input type="text" disabled style="display: none" onblur="updateCtrlName(this)"/>
                                 </div>
                                 <div class="body-form-target-body">
                                    <button type="button" onclick="deleteCtrlFrom(this)"><span>-</span></button>
                                    <input type="file" name="file" />
                                 </div>`;
            target.appendChild(formNode);
            return formNode;
        }
    },
    '链接': {
        action: function () {
            const formNode = document.createElement('div');
            formNode.className = 'body-form-target url';
            formNode.innerHTML = `<div class="body-form-target-title" onclick="editCtrlName(this)">
                                    <div>链接</div>
                                    <input type="text" disabled style="display: none" onblur="updateCtrlName(this)"/>
                                 </div>
                                 <div class="body-form-target-body">
                                    <button type="button" onclick="deleteCtrlFrom(this)"><span>-</span></button>
                                    <input type="url" name="url" placeholder="请输入链接" />
                                 </div>`;
            target.appendChild(formNode);
            return formNode;
        }
    },
    '颜色': {
        action: function () {
            const formNode = document.createElement('div');
            formNode.className = 'body-form-target color';
            formNode.innerHTML = `<div class="body-form-target-title" onclick="editCtrlName(this)">
                                    <div>颜色</div>
                                    <input type="text" disabled style="display: none" onblur="updateCtrlName(this)"/>
                                 </div>
                                 <div class="body-form-target-body">
                                    <button type="button" onclick="deleteCtrlFrom(this)"><span>-</span></button>
                                    <input type="color" name="color" />
                                 </div>`;
            target.appendChild(formNode);
            return formNode;
        }
    },
    '范围': {
        action: function () {
            const formNode = document.createElement('div');
            formNode.className = 'body-form-target range';
            formNode.innerHTML = `<div class="body-form-target-title" onclick="editCtrlName(this)">
                                    <div>范围</div>
                                    <input type="text" disabled style="display: none" onblur="updateCtrlName(this)"/>
                                 </div>
                                 <div class="body-form-target-body">
                                    <button type="button" onclick="deleteCtrlFrom(this)"><span>-</span></button>
                                    <input type="range" name="range" />
                                 </div>`;
            target.appendChild(formNode);
            return formNode;
        }
    },
    '日期': {
        action: function () {
            const formNode = document.createElement('div');
            formNode.className = 'body-form-target date';
            formNode.innerHTML = `<div class="body-form-target-title" onclick="editCtrlName(this)">
                                    <div>日期</div>
                                    <input type="text" disabled style="display: none" onblur="updateCtrlName(this)"/>
                                 </div>
                                 <div class="body-form-target-body">
                                    <button type="button" onclick="deleteCtrlFrom(this)"><span>-</span></button>
                                    <input type="date" name="date" />
                                 </div>`;
            target.appendChild(formNode);
            return formNode;
        }
    },
    '时间': {
        action: function () {
            const formNode = document.createElement('div');
            formNode.className = 'body-form-target time';
            formNode.innerHTML = `<div class="body-form-target-title" onclick="editCtrlName(this)">
                                    <div>时间</div>
                                    <input type="text" disabled style="display: none" onblur="updateCtrlName(this)"/>
                                 </div>
                                 <div class="body-form-target-body">
                                    <button type="button" onclick="deleteCtrlFrom(this)"><span>-</span></button>
                                    <input type="time" name="time" placeholder="请输入时间" />
                                 </div>`;
            target.appendChild(formNode);
            return formNode;
        }
    },
    '周数': {
        action: function () {
            const formNode = document.createElement('div');
            formNode.className = 'body-form-target week';
            formNode.innerHTML = `<div class="body-form-target-title" onclick="editCtrlName(this)">
                                    <div>周数</div>
                                    <input type="text" disabled style="display: none" onblur="updateCtrlName(this)"/>
                                 </div>
                                 <div class="body-form-target-body">
                                    <button type="button" onclick="deleteCtrlFrom(this)"><span>-</span></button>
                                    <input type="week" name="week" placeholder="请输入周数" />
                                 </div>`;
            target.appendChild(formNode);
            return formNode;
        }
    },
    '单选框': {
        action: function () {
            const formNode = document.createElement('div');
            formNode.className = 'body-form-target radio';
            formNode.innerHTML = `<div class="body-form-target-title" onclick="editCtrlName(this)">
                                    <div>单选框</div>
                                    <input type="text" disabled style="display: none" onblur="updateCtrlName(this)"/>
                                 </div>
                                 <div class="body-form-target-body">
                                    <button type="button" onclick="deleteCtrlFrom(this)"><span>-</span></button>
                                    <div class="radio-body"></div>
                                 </div>`;
            target.appendChild(formNode);
            const alertText = document.querySelector('.body-radio-alert');
            alertText.style = "display: flex;";
            return formNode;
        }
    },
    '多选框': {
        action: function () {
            const formNode = document.createElement('div');
            formNode.className = 'body-form-target checkbox';
            formNode.innerHTML = `<div class="body-form-target-title" onclick="editCtrlName(this)">
                                    <div>多选框</div>
                                    <input type="text" disabled style="display: none" onblur="updateCtrlName(this)"/>
                                 </div>
                                 <div class="body-form-target-body">
                                    <button type="button" onclick="deleteCtrlFrom(this)"><span>-</span></button>
                                    <div class="radio-body"></div>
                                 </div>`;
            target.appendChild(formNode);
            const alertText = document.querySelector('.body-radio-alert');
            alertText.style = "display: flex;";
            return formNode;
        }
    },
};
Object.keys(formTypeActions).forEach(key => {
    //遍历formTypeActions生成表单控件元素
    const ddElement = document.createElement('dd');
    ddElement.className = 'tools-tool';
    ddElement.setAttribute('draggable', true);
    ddElement.innerHTML = '<div>' + key + '</div>';
    ddElement.ondragstart = function () {
        dragCtrl = this;
    }
    ddElement.ondragend = function () {
        dragCtrl = null;
    }
    document.querySelector('.tools-body-ctrols').appendChild(ddElement);
});

//当前拖拽对象
let dragCtrl = null;
const radioButton = document.querySelector('.onOk');
let eventListener = null;

//拖拽进入目标事件
target.ondragover =  (e) => {
    e.preventDefault();
}
//拖拽进入目标区域松开鼠标事件
target.ondrop =  () => {
    if(dragCtrl && formTypeActions[dragCtrl.innerText]){
        const formNode = formTypeActions[dragCtrl.innerText].action();
        
        addNewNodes.push(formNode);       
        duplicateFormNodeName(formNode);
        //存储
        window.localStorage.setItem('form', document.getElementById('body-form').innerHTML);
        //弹窗事件
        const title = formNode.querySelector('.body-form-target-title div').innerText;
        eventListener = () => {
            createRadio(title);
        }
        radioButton.addEventListener('click', eventListener, false);
    }
}

//字段默认名称去重
function duplicateFormNodeName(formNode){
    targetTitles = document.querySelectorAll('.body-form-target-title div');
    const element = formNode.querySelector('.body-form-target-title div');
    const thisTypeNodes = [];
    let length = 0;
    addNewNodes.forEach(node => {
        if(node.querySelector('.body-form-target-title div').innerText.indexOf(element.innerText) > -1){
            thisTypeNodes.push(node);
        }
    });
    length = thisTypeNodes.length;
    if(length > 1){
        element.innerText += length-1;
    }
}

//创健单选框或多选框
function createRadio(v) {

    //当前选框区域
    let radioArea = null;
    //所有的选框区域
    const radioAreaList = document.querySelectorAll('.body-form-target-title div');
    radioAreaList.forEach(item => {
        if (item.innerText === v) {
            item = item.parentElement;
            radioArea = item.nextElementSibling.querySelector('div');
        }
    });
    const names = document.querySelector('.radio-names-setting textarea').value.split('；');
    names.forEach(name => {
        const radioNode = document.createElement('div');
        radioNode.style = 'margin-right: 10px';
        if (v.indexOf('单选框') > -1) {
            radioNode.innerHTML = `<input type="radio" name="radio" />
                                <span>`+ name + `</span>`;
        }else if (v.indexOf('多选框') > -1) {
            radioNode.innerHTML = `<input type="checkbox" name="checkbox" />
                                <span>`+ name + `</span>`;
        }
        radioArea.appendChild(radioNode);
    });
    document.querySelector('.radio-names-setting textarea').value = '';
    //存储
    window.localStorage.setItem('form', document.getElementById('body-form').innerHTML);
    radioButton.removeEventListener('click', eventListener);
    const alertText = document.querySelector('.body-radio-alert');
    alertText.style = "display: none;";
    return false;
}

//弹窗取消
function cancel() {
    radioButton.removeEventListener('click', eventListener);
    const alertText = document.querySelector('.body-radio-alert');
    alertText.style = "display: none;";
}