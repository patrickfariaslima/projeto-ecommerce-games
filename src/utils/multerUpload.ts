import multer from "multer";

const storage = multer.diskStorage({
    destination: (_: any, __:any, cb: any) => cb(null, '.src/images'),
    filename: (_:any, file: any, cb: any) => {
        const { originalName } = file;
        const [name, ext] = originalName.split('.');

        const newFileName = `${name}.${ext}`;

        cb(null, newFileName);
    }
});

const upload = multer({storage});

export default upload;