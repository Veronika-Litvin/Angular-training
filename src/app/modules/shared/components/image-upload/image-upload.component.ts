import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {
  @Input() imageControl!: FormControl;

  errorMsg!: string;

  uploadImageUrl(event: Event) {
    const target= event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

		const mimeType = file.type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.errorMsg = "Only images are supported";
			return;
		}
		
		const reader = new FileReader();
		reader.readAsDataURL(file);
		
		reader.onload = () => {
			this.errorMsg = "";
      this.imageControl.setValue(reader.result);
		}
	}

}
