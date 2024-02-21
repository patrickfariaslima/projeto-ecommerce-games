import multer from "multer";
import path from "path";

const uploadDirectory = path.join(__dirname, '../../images');

const storage = multer.diskStorage({
    destination: (_: any, __: any, cb: any) => cb(null, uploadDirectory),
    filename: (_: any, file: any, cb: any) => {
        const { originalname } = file;
        const [name, ext] = originalname.split('.');
        const newFileName = `${name}.${ext}`;
        cb(null, newFileName);
    }
});

const upload = multer({ storage });

export default upload;
