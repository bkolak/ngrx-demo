import { Component, OnInit } from '@angular/core';
import { Participant, ParticipantsService } from '../../../../common';

@Component({
  selector: 'app-meet-up',
  templateUrl: './meet-up.component.html',
  styleUrls: ['./meet-up.component.scss']
})
export class MeetUpComponent implements OnInit {
  constructor(private participantService: ParticipantsService) {}
  public loadingData = false;
  public participants: Participant[];
  ngOnInit() {
    this.loadingData = true;
    this.participantService.getParticipants().subscribe(p => {
      this.participants = p;
      this.loadingData = false;
    });
  }

  onDeleteParticipant(participant: Participant) {
    console.log('delete participants');
    console.log(participant);
    this.participantService.deleteParticipant(participant).subscribe(p => {
      console.log(p);
      this.participants = p;
    });
  }
}
