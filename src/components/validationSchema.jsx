import *as Yup from 'yup'

const validationSchema = Yup.object({
    name: Yup.string().required('لطفا این قسمت را پر کنید'),
    email:Yup.string().required('لطفا این قسمت را پر کنید').email("لطفا قالب ایمیل را رعایت کنید مثال : aaa@example.bbb"),
    password: Yup.string().required('لطفا این قسمت را پر کنید').min(8 , 'حد اقل 8 کارکتر وارد کنید'),
    address: Yup.object({
        city:Yup.string().required('لطفا این قسمت را پر کنید'),
        postalCode:Yup.string().required('لطفا این قسمت را پر کنید'),
    }),
    phone: Yup.array().of(Yup.string().required('لطفا این قسمت را پر کنید')),
    favorits: Yup.array().of(Yup.string().required('لطفا این قسمت را پر کنید'))
})


export default validationSchema ;