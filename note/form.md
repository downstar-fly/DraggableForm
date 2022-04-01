# 1. from-core

## 1.1 controller
### 1.1.1 useDisplayCols.ts
<u>获取到当前权限下可视控件</u>

### 1.1.2 useStore.ts
<u>封装store方法 与数据交互</u>
***

## 1.2 store

***
## 1.3 types
***
## 1.4 utils
***
## 1.5 **controller.vue**


<u>负责控件渲染组件的初始化，主要包括 控件列表初始化&控件数据初始化</u>

- initDisplayCols
- initStore
***
## 1.6 **controlWrapper.ts** 

**最内层的控件渲染组件**

对控件进行渲染  
接收的参数：
- controlBaseProps 控件所需的基本参数
  - appCode
  - schemaCode
  - viewCode
  - bizObjectId
  - appPermissions `子表`
  - columns `子表`
  - preference `子表`
  - orgTabPanes
  - workItemId
- baseProps 表单核心所需的基本参数
  - controlBaseProps
  - isCreateMode `是否在创建场景中`
  - permissions
  - operatePermission
  - isLoading
- controlsProps 控件参数
  - baseProps
  - uowId `?`
  - rowValues `行数据`
  - subTableValue 
  - displayControl `可视控件`
  - errorsMsg
- rFuncProps 渲染控件的方法
  - renderControls

***
## 1.7 index.ts
 入口 注册FormCore组件

 ***