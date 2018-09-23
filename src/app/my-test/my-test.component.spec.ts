import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestComponent } from './my-test.component';

describe('MyTestComponent', () => {
  let component: MyTestComponent;
  let fixture: ComponentFixture<MyTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should render 'testContent'`, () => {
    const fixture = TestBed.createComponent(MyTestComponent);
    fixture.detectChanges();
    const testComponent = fixture.debugElement.componentInstance;
    expect(testComponent.testContent).toEqual('Hello from our service!');
  });

  it(`should render 'testContent' in second paragraph`, () => {
    const fixture = TestBed.createComponent(MyTestComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('p')[1].textContent).toContain('Hello from our service!');
  });
});
